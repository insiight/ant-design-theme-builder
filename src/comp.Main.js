import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu } from 'antd';
import ThemeBuilder from './themeBuilder';
const { Sider, Content } = Layout;
import components from './components.json';

export default function Main(props) {
  return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <Menu
          mode="inline"
          theme="dark">
          {components.map(comp => {
            if (comp.demos.length) {
              return <Menu.Item key={comp.name}><Link to={`/${comp.name}`}>{comp.name}</Link></Menu.Item>
            }
            return null;
          })}
        </Menu>
      </Sider>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', right: 0, background: 'white', zIndex: 999, borderLeft: '1px #eee solid' }}>
        <ThemeBuilder />
      </Sider>
      <Layout style={{ marginLeft: 200, marginRight: 200 }}>
        <Content style={{ padding: 30 }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
}
