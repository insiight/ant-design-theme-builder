import React from 'react';
import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

export default function DemoComponent_message_info() {
return(
  <Button type="primary" onClick={info}>Display normal message</Button>
);
};

export const demo = <DemoComponent_message_info key="DemoComponent_message_info" />;
