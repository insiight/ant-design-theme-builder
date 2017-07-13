import React from 'react';
import { Breadcrumb } from 'antd';

export default function DemoComponent_breadcrumb_basic() {
return(
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
};

export const demo = <DemoComponent_breadcrumb_basic key="DemoComponent_breadcrumb_basic" />;
