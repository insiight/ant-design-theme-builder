import React from 'react';
import { Checkbox } from 'antd';

export default function DemoComponent_checkbox_disabled() {
return(
  <div>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </div>
  );
};

export const demo = <DemoComponent_checkbox_disabled key="DemoComponent_checkbox_disabled" />;
