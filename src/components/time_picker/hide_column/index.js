import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

export default function DemoComponent_time_picker_hide_column() {
return(
  <TimePicker defaultValue={moment('12:08', format)} format={format} />
);
};

export const demo = <DemoComponent_time_picker_hide_column key="DemoComponent_time_picker_hide_column" />;
