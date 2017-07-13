import React from 'react';
import { Switch } from 'antd';

export default function DemoComponent_switch_size() {
return(
  <div>
    <Switch />
    <br />
    <Switch size="small" />
  </div>
);
};

export const demo = <DemoComponent_switch_size key="DemoComponent_switch_size" />;
