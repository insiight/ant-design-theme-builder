import React from 'react';
import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hanzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

export default function DemoComponent_cascader_change_on_select() {
return(
  <Cascader options={options} onChange={onChange} changeOnSelect />
);
};

export const demo = <DemoComponent_cascader_change_on_select key="DemoComponent_cascader_change_on_select" />;
