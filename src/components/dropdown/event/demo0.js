import React from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';
const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

export default function DemoComponent_dropdown_event() {
return(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me, Click menu item <Icon type="down" />
    </a>
  </Dropdown>
);
};

export const demo = <DemoComponent_dropdown_event key="DemoComponent_dropdown_event" />;
