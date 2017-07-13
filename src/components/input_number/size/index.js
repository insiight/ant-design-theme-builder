import './index.css';
import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

export default function DemoComponent_input_number_size() {
return(
  <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>
);
};

export const demo = <DemoComponent_input_number_size key="DemoComponent_input_number_size" />;
