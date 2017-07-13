import React from 'react';
import { Avatar, Badge } from 'antd';

export default function DemoComponent_avatar_badge() {
return(
  <div>
    <span style={{ marginRight: 24 }}>
      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
    </span>
    <span>
      <Badge dot><Avatar shape="square" icon="user" /></Badge>
    </span>
  </div>
);
};

export const demo = <DemoComponent_avatar_badge key="DemoComponent_avatar_badge" />;
