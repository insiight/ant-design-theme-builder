import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

export default function DemoComponent_message_duration() {
return(
  <Button onClick={success}>Customized display duration</Button>
);
};

export const demo = <DemoComponent_message_duration key="DemoComponent_message_duration" />;
