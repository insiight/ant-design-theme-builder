import React from 'react';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default function DemoComponent_checkbox_group() {
return(
  <div>
    <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={onChange} />
  </div>
);
};

export const demo = <DemoComponent_checkbox_group key="DemoComponent_checkbox_group" />;
