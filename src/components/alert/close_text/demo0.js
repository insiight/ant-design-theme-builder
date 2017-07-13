import React from 'react';
import { Alert } from 'antd';

export default function DemoComponent_alert_close_text() {
return(
  <Alert message="Info Text" type="info" closeText="Close Now" />
);
};

export const demo = <DemoComponent_alert_close_text key="DemoComponent_alert_close_text" />;
