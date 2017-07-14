import React from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Input, Tag } from 'antd';
import ThemeBuilder from './themeBuilder';
const { Sider, Content, Header } = Layout;
import components from './components.json';

export default class Main extends React.PureComponent {
  state = {
    search: '',
  };

  render() {
    const props = this.props;
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', zIndex: 999, background: 'white' }}>
          <div style={{ fontSize: 24, float: 'left' }}>Ant Design Theme Builder </div>
          <Tag style={{ marginLeft: 10, marginTop: 22, float: 'left' }} color="green">BETA</Tag>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item style={{ float: 'right' }} key="1"><a target="_blank" href="https://ant.design/docs/react/introduce">Ant Design Official</a></Menu.Item>
            <Menu.Item style={{ float: 'right' }} key="2"><a target="_blank" href="https://github.com/insiight/ant-design-theme-builder">Github</a></Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ marginTop: 94 }}>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: 'white', }}>
            <div style={{ margin: 20 }}>
              <Input.Search
                placeholder="search components"
                onChange={e => {
                  this.setState({ search: e.target.value });
                }} />
            </div>
            <Menu mode="inline" style={{ borderRight: 0 }}>
              {components.map(comp => {
                if (comp.demos.length && (!this.state.search || comp.name.includes(this.state.search))) {
                  return <Menu.Item key={comp.name}><Link to={`/${comp.name}`}>{comp.name}</Link></Menu.Item>
                }
                return null;
              })}
            </Menu>
          </Sider>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', right: 0, background: 'white', zIndex: 999 }}>
            <ThemeBuilder />
          </Sider>
          <Layout style={{ marginLeft: 200, marginRight: 200 }}>
            <Content style={{ padding: 30, paddingTop: 0 }}>{props.children}</Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
