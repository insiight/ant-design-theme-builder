import React from 'react';
import { Badge, Icon } from 'antd';

export default function DemoComponent_badge_dot() {
return(
  <div>
    <Badge dot>
      <Icon type="notification" />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </div>
);
};

export const demo = <DemoComponent_badge_dot key="DemoComponent_badge_dot" />;
