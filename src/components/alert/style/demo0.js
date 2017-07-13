import React from 'react';
import { Alert } from 'antd';

export default function DemoComponent_alert_style() {
return(<div>
  <Alert message="Success Text" type="success" />
  <Alert message="Info Text" type="info" />
  <Alert message="Warning Text" type="warning" />
  <Alert message="Error Text" type="error" />
</div>);
};

export const demo = <DemoComponent_alert_style key="DemoComponent_alert_style" />;
