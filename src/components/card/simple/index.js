import React from 'react';
import { Card } from 'antd';

export default function DemoComponent_card_simple() {
return(
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
};

export const demo = <DemoComponent_card_simple key="DemoComponent_card_simple" />;
