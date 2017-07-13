import React from 'react';
import { Popconfirm, message } from 'antd';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

export default function DemoComponent_popconfirm_basic() {
return(
  <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>
);
};

export const demo = <DemoComponent_popconfirm_basic key="DemoComponent_popconfirm_basic" />;
