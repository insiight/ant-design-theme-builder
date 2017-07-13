import React from 'react';
import { Rate, Icon } from 'antd';

export default function DemoComponent_rate_character() {
return(
  <div>
    <Rate character={<Icon type="heart" />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </div>
);
};

export const demo = <DemoComponent_rate_character key="DemoComponent_rate_character" />;
