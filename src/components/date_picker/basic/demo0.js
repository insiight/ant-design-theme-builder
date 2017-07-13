import React from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function DemoComponent_date_picker_basic() {
return(
  <div>
    <DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
  </div>
);
};

export const demo = <DemoComponent_date_picker_basic key="DemoComponent_date_picker_basic" />;
