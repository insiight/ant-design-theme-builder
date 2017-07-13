import React from 'react';
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

export default function DemoComponent_slider_tip_formatter() {
return(
  <div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>);
};

export const demo = <DemoComponent_slider_tip_formatter key="DemoComponent_slider_tip_formatter" />;
