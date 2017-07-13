import './index.css';
import React from 'react';
import { Spin } from 'antd';

export default function DemoComponent_spin_inside() {
return(
  <div className="example">
    <Spin />
  </div>
);
};

export const demo = <DemoComponent_spin_inside key="DemoComponent_spin_inside" />;
