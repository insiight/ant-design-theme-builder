import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default function DemoComponent_calendar_card() {
return(
  <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
);
};

export const demo = <DemoComponent_calendar_card key="DemoComponent_calendar_card" />;
