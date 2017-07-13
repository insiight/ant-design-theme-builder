import React from 'react';
import { Button, notification, Icon } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
};

export default function DemoComponent_notification_custom_icon() {
return(
  <Button type="primary" onClick={openNotification}>Open the notification box</Button>
);
};

export const demo = <DemoComponent_notification_custom_icon key="DemoComponent_notification_custom_icon" />;
