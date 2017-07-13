import React from 'react';
import { Breadcrumb } from 'antd';

export default function DemoComponent_breadcrumb_separator() {
return(
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);
};

export const demo = <DemoComponent_breadcrumb_separator key="DemoComponent_breadcrumb_separator" />;
