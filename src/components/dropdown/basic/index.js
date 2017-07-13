import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
    </Menu.Item>
  </Menu>
);

export default function DemoComponent_dropdown_basic() {
return(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>
);
};

export const demo = <DemoComponent_dropdown_basic key="DemoComponent_dropdown_basic" />;
