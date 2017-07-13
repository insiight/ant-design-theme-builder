import React from 'react';
import { TimePicker } from 'antd';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default function DemoComponent_time_picker_12hours() {
return(
  <div>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </div>
);
};

export const demo = <DemoComponent_time_picker_12hours key="DemoComponent_time_picker_12hours" />;
