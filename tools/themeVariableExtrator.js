import fs from 'fs';
import { ANTD_THEME_PATH, SRC_ANTD_THEME_VARIABLE_PATH } from './config';

function extractVariables(lessCode) {
  const EX = /@([a-zA-Z_$0-9\-]+)\s*:\s*(.+?);/g;
  const variables = {};
  let ret = null;
  while (ret = EX.exec(lessCode)) {
    variables[ret[1]] = {
      default: ret[2],
    };
  }
  return variables;
}

function buildVariableFile(variables, path) {
  const str = `export default ${JSON.stringify(variables) };`;
  fs.writeFileSync(path, str);
}

const variables = extractVariables(fs.readFileSync(ANTD_THEME_PATH).toString());
buildVariableFile(variables, SRC_ANTD_THEME_VARIABLE_PATH);
