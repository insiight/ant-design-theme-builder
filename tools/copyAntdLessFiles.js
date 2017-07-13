import path from 'path';
import klawSync from 'klaw-sync';
import fsExtra from 'fs-extra';
const ROOT_PATH = path.resolve(__dirname, '../');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
const BUILD_PATH = path.resolve(ROOT_PATH, 'docs');
const ANTD_PATH = path.resolve(NODE_MODULES_PATH, 'antd');
const LESS_MODULE_PATH = path.resolve(NODE_MODULES_PATH, 'less');
const filterFn = item => path.extname(item.path) === '.less';
const lessPaths = klawSync(ANTD_PATH, { filter: filterFn });

// copy all less files for antd
lessPaths.forEach(lessPath => {
  const relativePath = path.relative(ANTD_PATH, lessPath.path);
  const targetPath = path.resolve(BUILD_PATH, 'antd', relativePath);
  fsExtra.copySync(lessPath.path, targetPath);
});

// copy less.js
fsExtra.copySync(path.resolve(LESS_MODULE_PATH, 'dist/less.js'), path.resolve(BUILD_PATH, 'less/dist/less.js'));



