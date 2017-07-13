import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default function DemoComponent_calendar_basic() {
return(
  <Calendar onPanelChange={onPanelChange} />
);
};

export const demo = <DemoComponent_calendar_basic key="DemoComponent_calendar_basic" />;
