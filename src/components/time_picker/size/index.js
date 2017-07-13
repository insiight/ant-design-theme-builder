import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

export default function DemoComponent_time_picker_size() {
return(
  <div>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </div>
);
};

export const demo = <DemoComponent_time_picker_size key="DemoComponent_time_picker_size" />;
