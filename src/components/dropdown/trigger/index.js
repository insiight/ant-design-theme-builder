import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

export default function DemoComponent_dropdown_trigger() {
return(<div>
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
      Click me <Icon type="down" />
    </a>
  </Dropdown>
</div>);
};

export const demo = <DemoComponent_dropdown_trigger key="DemoComponent_dropdown_trigger" />;
