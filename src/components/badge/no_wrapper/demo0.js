import React from 'react';
import { Badge } from 'antd';

export default function DemoComponent_badge_no_wrapper() {
return(
  <div>
    <Badge count={25} />
    <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
    <Badge count={109} style={{ backgroundColor: '#87d068' }} />
  </div>
);
};

export const demo = <DemoComponent_badge_no_wrapper key="DemoComponent_badge_no_wrapper" />;
