import path from 'path';
import klawSync from 'klaw-sync';
import fs from 'fs';
const ROOT_PATH = path.resolve(__dirname, '../');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
const ANTD_PATH = path.resolve(NODE_MODULES_PATH, 'antd');
const ANTD_THEME_PATH = path.resolve(ANTD_PATH, 'lib/style/themes/default.less');

function hasTransformed(themeCode) {
  return themeCode.includes('@unit:')
}

function resetDefaultTheme(themeCode) {
  if (!themeCode.includes('@unit:')) {
    const unit = '@unit: 0.625rem; // for default browser font-size: 16px, @unit equal to 10px \n';
    return unit + themeCode;
  }
  return themeCode;
}

function replacePixelToREM(code) {
  let result = code;
  let ret = null;

  // === replace expression involves number (without unit)
  result = result.replace(/@i\s/g, '$i ');
  result = result.replace(/@index\s/g, '$index ');
  while (ret = /(@[a-zA-Z_$0-9]+.*?\s+[+\-]\s+)([1-9]\d*)([\s;,\)])/.exec(result)) {
    result = result.replace(ret[0], `${ret[1]}${ret[2]}px${ret[3]}`);
  }
  result = result.replace(/\$i\s/g, '@i ');
  result = result.replace(/\$index\s/g, '@index ');

  // === replace a specific one
  result = result.replace('@input-affix-width: 17;', '@input-affix-width: 17px;');

  while (ret = /(:.*?)([\d.]+)px/.exec(result) || /(\..+?\(.*?)([\d.]+)px(.*?\))/.exec(result)) {
    const matchedStr = ret[0];
    const prependStr = ret[1];
    let number = ret[2];
    const appendStr = ret[3] || '';
    number = number.includes('.') ? parseFloat(number) : parseInt(number);
    const remValue = `(${String(number / 10)} * @unit)`;
    result = result.replace(matchedStr, `${prependStr}${remValue}${appendStr}`);
  }
  return result;
}

function replacePixelToREMForPath(filePath) {
  const fileCode = fs.readFileSync(filePath).toString();
  const resultCode = replacePixelToREM(fileCode);
  fs.writeFileSync(filePath, resultCode);
}

function resetDefaultThemeForPath(themePath) {
  const fileCode = fs.readFileSync(themePath).toString();
  const resultCode = resetDefaultTheme(fileCode);
  fs.writeFileSync(themePath, resultCode);
}

const themeCode = fs.readFileSync(ANTD_THEME_PATH).toString();

if (!hasTransformed(themeCode)) {

  const filterFn = item => path.extname(item.path) === '.less';
  const lessPaths = klawSync(ANTD_PATH, { filter: filterFn });

  // copy all less files for antd
  lessPaths.forEach(lessPath => {
    const filepath = lessPath.path;
    replacePixelToREMForPath(filepath);
  });

  // copy less.js
  resetDefaultThemeForPath(ANTD_THEME_PATH);
}

