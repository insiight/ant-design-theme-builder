import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

export default function DemoComponent_input_number_basic() {
return(
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
);
};

export const demo = <DemoComponent_input_number_basic key="DemoComponent_input_number_basic" />;
