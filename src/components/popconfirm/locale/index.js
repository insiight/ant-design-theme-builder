import React from 'react';
import { Popconfirm } from 'antd';

export default function DemoComponent_popconfirm_locale() {
return(
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
);
};

export const demo = <DemoComponent_popconfirm_locale key="DemoComponent_popconfirm_locale" />;
