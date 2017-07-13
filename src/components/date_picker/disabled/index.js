import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
export default function DemoComponent_date_picker_disabled() {
return(
  <div>
    <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
    <br />
    <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
    <br />
    <RangePicker
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
      disabled
    />
  </div>
);
};

export const demo = <DemoComponent_date_picker_disabled key="DemoComponent_date_picker_disabled" />;
