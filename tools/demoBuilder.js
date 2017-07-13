import path from 'path';
import fs from 'fs';
const SRC_PATH = path.resolve(__dirname, '../src');
const ANTD_SRC_PATH = path.resolve(__dirname, '../ant-design');
const ANTD_COMPONENTS_PATH = path.resolve(ANTD_SRC_PATH, 'components');

const EX_JS = /````jsx\n([\n\d\D]*?)````/g;
const EX_CSS = /````css\n([\n\d\D]*?)````/g;

function extraCodeFromTrunk(mdString, ex) {
  const results = [];
  let ret = null;
  while (ret = ex.exec(mdString)) {
    results.push(ret[1]);
  }

  return results;
}

function transformJSCode(code, componentName, demoName, index) {
  const ComponentName = `DemoComponent_${componentName}_${demoName}${index === 0 ? '' : '_' + index}`;
  return "import React from 'react';\n" +
    code
    .replace(/ReactDOM\.render\(/, `export default function ${ComponentName}() {\nreturn(`)
    .replace(/,\n?\s*mountNode\n?\s*\)/, ');\n}') +
    `\nexport const demo = <${ComponentName} key="${ComponentName}" />;\n`;
}

function getComponentDemoInfos() {
  const excludes = ['__tests__', '_util', 'style', 'version'];
  const components = fs.readdirSync(ANTD_COMPONENTS_PATH)
    .filter(com => !excludes.includes(com));
  const results = [];
  components.forEach(comp => {
    const demosPath = path.resolve(ANTD_COMPONENTS_PATH, comp, 'demo');
    if (fs.existsSync(demosPath)) {
      const compName = comp.replace(/-/g, '_');
      const result = {
        name: compName,
        demos: fs.readdirSync(demosPath)
          .filter(demo => demo.endsWith('.md'))
          .map(demo => {
            const demoPath = path.resolve(demosPath, demo);
            const demoContent = fs.readFileSync(demoPath).toString();
            const demoName = demo.replace('.md', '').replace(/-/g, '_');
            return {
              name: demoName,
              content: demoContent,
              jsCodes: extraCodeFromTrunk(demoContent, EX_JS).map((code, index) => transformJSCode(code, compName, demoName, index)),
              cssCodes: extraCodeFromTrunk(demoContent, EX_CSS),
            };
          }),
      };
      results.push(result);
    }
  });
  return results;
}

const componentDemoInfos = getComponentDemoInfos();
const componentDemoInfosWithoutCode = componentDemoInfos.map(comp => ({
  name: comp.name,
  demos: comp.demos.map(demo => ({
    name: demo.name,
  })),
}));

fs.writeFileSync('./ant_demo_data.json', JSON.stringify(componentDemoInfos));
fs.writeFileSync(path.resolve(SRC_PATH, 'components.json'), JSON.stringify(componentDemoInfosWithoutCode));

function createComponentRoute(compDemoInfos) {
  let childRoutes = '[';
  compDemoInfos.forEach(compInfo => {
    compInfo.demos.forEach(demoInfo => {
      if (demoInfo.jsCodes.length) {
        childRoutes += `\n{
          path: '/${compInfo.name}/${demoInfo.name}',
          component: require('./components/${compInfo.name}/${demoInfo.name}').default,
        },`;
      }
    });
  });
  childRoutes += ']';
  return `export default {
    childRoutes: ${childRoutes},
  };`;
}

function createDemoFiles(parentPath, demoInfo) {
  const demoPath = path.resolve(parentPath, demoInfo.name);
  if (!fs.existsSync(demoPath)) {
    fs.mkdirSync(demoPath);
  }

  if (demoInfo.jsCodes.length > 0) {
    demoInfo.jsCodes.forEach((code, index) => {
      fs.writeFileSync(path.resolve(demoPath, 'demo' + index + '.js'), code);
    });

    demoInfo.cssCodes.forEach((code, index) => {
      fs.writeFileSync(path.resolve(demoPath, 'demo' + index + '.css'), code);
    });

    fs.writeFileSync(path.resolve(demoPath, 'index.md'), demoInfo.content);
    fs.writeFileSync(path.resolve(demoPath, 'index.js'), `
      import React from 'react';
      ${demoInfo.cssCodes.length ? `import './demo0.css';` : ''}
      import Component from './demo0';
      
      export default function Demo() {
        return (<div>
          <Component />
        </div>);
      }
    `);
  }
}

function createComponentFiles(parentPath, compInfo) {
  const compPath = path.resolve(parentPath, compInfo.name);
  if (!fs.existsSync(compPath)) {
    fs.mkdirSync(compPath);
  }
  compInfo.demos.forEach(demo => {
    createDemoFiles(compPath, demo);
  });
}

function createFiles(srcPath, compInfos) {
  // create root route
  const rootRoute = createComponentRoute(compInfos);
  fs.writeFileSync(path.resolve(srcPath, 'route.js'), rootRoute);

  // create components
  const componentsPath = path.resolve(srcPath, 'components');

  if (!fs.existsSync(componentsPath)) {
    fs.mkdirSync(componentsPath);
  }
  compInfos.forEach(compInfo => {
    createComponentFiles(componentsPath, compInfo);
  });
}

createFiles(SRC_PATH, componentDemoInfos);
