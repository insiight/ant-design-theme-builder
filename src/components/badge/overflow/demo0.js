import React from 'react';
import { Badge } from 'antd';

export default function DemoComponent_badge_overflow() {
return(
  <div>
    <Badge count={99}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={100}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <a href="#" className="head-example" />
    </Badge>
  </div>
);
};

export const demo = <DemoComponent_badge_overflow key="DemoComponent_badge_overflow" />;
