import React from 'react';
import { Badge } from 'antd';

export default function DemoComponent_badge_basic() {
return(
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
  </div>
);
};

export const demo = <DemoComponent_badge_basic key="DemoComponent_badge_basic" />;
