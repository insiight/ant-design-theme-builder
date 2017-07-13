import React from 'react';
import { TimePicker } from 'antd';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledHours() {
  const hours = range(0, 60);
  hours.splice(20, 4);
  return hours;
}

function disabledMinutes(h) {
  if (h === 20) {
    return range(0, 31);
  } else if (h === 23) {
    return range(30, 60);
  }
  return [];
}

export default function DemoComponent_time_picker_disable_options() {
return(
  <div>
    <TimePicker
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      placeholder="Just Disabled"
    />
    <TimePicker
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      hideDisabledOptions
      placeholder="Hide Directly"
    />
  </div>
);
};

export const demo = <DemoComponent_time_picker_disable_options key="DemoComponent_time_picker_disable_options" />;
