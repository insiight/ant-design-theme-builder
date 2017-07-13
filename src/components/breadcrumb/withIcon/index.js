import React from 'react';
import { Breadcrumb, Icon } from 'antd';

export default function DemoComponent_breadcrumb_withIcon() {
return(
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <Icon type="home" />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <Icon type="user" />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      Application
    </Breadcrumb.Item>
  </Breadcrumb>
);
};

export const demo = <DemoComponent_breadcrumb_withIcon key="DemoComponent_breadcrumb_withIcon" />;
