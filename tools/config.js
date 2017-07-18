import path from 'path';

export const ROOT_PATH = path.resolve(__dirname, '../');
export const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
export const BUILD_PATH = path.resolve(ROOT_PATH, 'docs');
export const ANTD_PATH = path.resolve(NODE_MODULES_PATH, 'antd');
export const ANTD_STYLE_PATH = path.resolve(ANTD_PATH, 'lib');
export const ANTD_THEME_PATH = path.resolve(ANTD_PATH, 'lib/style/themes/default.less');
export const LESS_MODULE_PATH = path.resolve(NODE_MODULES_PATH, 'less');

export const SRC_PATH = path.resolve(ROOT_PATH, 'src');
export const SRC_ANTD_THEME_VARIABLE_PATH = path.resolve(SRC_PATH, 'themeBuilder/variable.js');
