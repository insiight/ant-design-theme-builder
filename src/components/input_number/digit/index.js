import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

export default function DemoComponent_input_number_digit() {
return(
  <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
);
};

export const demo = <DemoComponent_input_number_digit key="DemoComponent_input_number_digit" />;
