import React from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export default function DemoComponent_date_picker_extra_footer() {
return(
  <div>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
  </div>
);
};

export const demo = <DemoComponent_date_picker_extra_footer key="DemoComponent_date_picker_extra_footer" />;
