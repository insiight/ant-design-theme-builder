import React from 'react';
import { Card } from 'antd';

export default function DemoComponent_card_basic() {
return(
  <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
};

export const demo = <DemoComponent_card_basic key="DemoComponent_card_basic" />;
