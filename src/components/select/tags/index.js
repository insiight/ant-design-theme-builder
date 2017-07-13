import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function DemoComponent_select_tags() {
return(
  <Select
    mode="tags"
    style={{ width: '100%' }}
    searchPlaceholder="标签模式"
    onChange={handleChange}
  >
    {children}
  </Select>
);
};

export const demo = <DemoComponent_select_tags key="DemoComponent_select_tags" />;
