import React from 'react';
import { Button } from 'antd';

export default function DemoComponent_button_icon() {
return(
  <div>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">Search</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">Search</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">Search</Button>
  </div>);
};

export const demo = <DemoComponent_button_icon key="DemoComponent_button_icon" />;
