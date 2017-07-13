import React from 'react';
import { Card } from 'antd';

export default function DemoComponent_card_loading() {
return(
  <Card loading title="Card title" style={{ width: '34%' }}>
    Whatever content
  </Card>
);
};

export const demo = <DemoComponent_card_loading key="DemoComponent_card_loading" />;
