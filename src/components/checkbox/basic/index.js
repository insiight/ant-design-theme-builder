import React from 'react';
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function DemoComponent_checkbox_basic() {
return(
  <Checkbox onChange={onChange}>Checkbox</Checkbox>
);
};

export const demo = <DemoComponent_checkbox_basic key="DemoComponent_checkbox_basic" />;
