import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

function handleChange(value) {
  console.log(value);  // { key: "lucy", label: "Lucy (101)" }
}

export default function DemoComponent_select_label_in_value() {
return(
  <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>
);
};

export const demo = <DemoComponent_select_label_in_value key="DemoComponent_select_label_in_value" />;
