import React from 'react';
import { Input } from 'antd';

export default function DemoComponent_input_size() {
return(
  <div className="example-input">
    <Input size="large" placeholder="large size" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" />
  </div>
);
};

export const demo = <DemoComponent_input_size key="DemoComponent_input_size" />;
