import React from 'react';
import { Card } from 'antd';

export default function DemoComponent_card_border_less() {
return(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);
};

export const demo = <DemoComponent_card_border_less key="DemoComponent_card_border_less" />;
