import './index.css';
import React from 'react';
import { Card } from 'antd';

export default function DemoComponent_card_no_padding() {
return(
  <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
    <div className="custom-image">
      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    </div>
    <div className="custom-card">
      <h3>Europe Street beat</h3>
      <p>www.instagram.com</p>
    </div>
  </Card>
);
};

export const demo = <DemoComponent_card_no_padding key="DemoComponent_card_no_padding" />;
