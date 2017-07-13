import React from 'react';
import { Badge } from 'antd';

export default function DemoComponent_badge_status() {
return(
  <div>
    <Badge status="success" />
    <Badge status="error" />
    <Badge status="default" />
    <Badge status="processing" />
    <Badge status="warning" />
    <br />
    <Badge status="success" text="Success" />
    <br />
    <Badge status="error" text="Error" />
    <br />
    <Badge status="default" text="Default" />
    <br />
    <Badge status="processing" text="Processing" />
    <br />
    <Badge status="warning" text="Warning" />
  </div>
);
};

export const demo = <DemoComponent_badge_status key="DemoComponent_badge_status" />;
