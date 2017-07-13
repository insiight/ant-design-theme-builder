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

export default function DemoComponent_select_automatic_tokenization() {
return(
  <Select
    mode="tags"
    style={{ width: '100%' }}
    onChange={handleChange}
    tokenSeparators={[',']}
  >
    {children}
  </Select>
);
};

export const demo = <DemoComponent_select_automatic_tokenization key="DemoComponent_select_automatic_tokenization" />;
