import React from 'react';
import { Alert } from 'antd';

export default function DemoComponent_alert_basic() {
return(
  <Alert message="Success Text" type="success" />
);
};

export const demo = <DemoComponent_alert_basic key="DemoComponent_alert_basic" />;
