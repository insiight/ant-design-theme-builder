import React from 'react';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default function DemoComponent_switch_basic() {
return(
  <Switch defaultChecked={false} onChange={onChange} />);
};

export const demo = <DemoComponent_switch_basic key="DemoComponent_switch_basic" />;
