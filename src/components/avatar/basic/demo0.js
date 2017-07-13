import React from 'react';
import { Avatar } from 'antd';

export default function DemoComponent_avatar_basic() {
return(
  <div>
    <div>
      <Avatar size="large" icon="user" />
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
    </div>
  </div>
);
};

export const demo = <DemoComponent_avatar_basic key="DemoComponent_avatar_basic" />;
