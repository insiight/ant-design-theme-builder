import React from 'react';
import { Select } from 'antd';
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function DemoComponent_select_optgroup() {
return(
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>
);
};

export const demo = <DemoComponent_select_optgroup key="DemoComponent_select_optgroup" />;
