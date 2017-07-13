import React from 'react';
import { Button } from 'antd';

export default function DemoComponent_button_basic() {
return(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
);
};

export const demo = <DemoComponent_button_basic key="DemoComponent_button_basic" />;
