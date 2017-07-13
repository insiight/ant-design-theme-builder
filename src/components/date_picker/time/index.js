import React from 'react';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

export default function DemoComponent_date_picker_time() {
return(
  <div>
    <DatePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Select Time"
      onChange={onChange}
      onOk={onOk}
    />
    <br />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      placeholder={['Start Time', 'End Time']}
      onChange={onChange}
      onOk={onOk}
    />
  </div>
);
};

export const demo = <DemoComponent_date_picker_time key="DemoComponent_date_picker_time" />;
