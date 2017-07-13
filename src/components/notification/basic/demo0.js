import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default function DemoComponent_notification_basic() {
return(
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>
);
};

export const demo = <DemoComponent_notification_basic key="DemoComponent_notification_basic" />;
