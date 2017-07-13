import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default function DemoComponent_time_picker_basic() {
return(
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />);
};

export const demo = <DemoComponent_time_picker_basic key="DemoComponent_time_picker_basic" />;
