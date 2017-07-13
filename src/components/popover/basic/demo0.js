import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default function DemoComponent_popover_basic() {
return(
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);
};

export const demo = <DemoComponent_popover_basic key="DemoComponent_popover_basic" />;
