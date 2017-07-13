import React from 'react';
import { Badge } from 'antd';

export default function DemoComponent_badge_link() {
return(
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>
);
};

export const demo = <DemoComponent_badge_link key="DemoComponent_badge_link" />;
