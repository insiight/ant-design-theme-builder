import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

export default function DemoComponent_time_picker_disabled() {
return(
  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
);
};

export const demo = <DemoComponent_time_picker_disabled key="DemoComponent_time_picker_disabled" />;
