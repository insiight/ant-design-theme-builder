import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default function DemoComponent_popover_triggerType() {
return(
  <div>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </div>
);
};

export const demo = <DemoComponent_popover_triggerType key="DemoComponent_popover_triggerType" />;
