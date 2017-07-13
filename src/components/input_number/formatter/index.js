import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

export default function DemoComponent_input_number_formatter() {
return(
  <div>
    <InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>
);
};

export const demo = <DemoComponent_input_number_formatter key="DemoComponent_input_number_formatter" />;
