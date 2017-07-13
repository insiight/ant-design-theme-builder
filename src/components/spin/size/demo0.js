import React from 'react';
import { Spin } from 'antd';

export default function DemoComponent_spin_size() {
return(
  <div>
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
);
};

export const demo = <DemoComponent_spin_size key="DemoComponent_spin_size" />;
