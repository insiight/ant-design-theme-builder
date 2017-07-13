import React from 'react';
import { Tooltip } from 'antd';

export default function DemoComponent_tooltip_basic() {
return(
  <Tooltip title="prompt text">
    <span>Tooltip will show when mouse enter.</span>
  </Tooltip>
);
};

export const demo = <DemoComponent_tooltip_basic key="DemoComponent_tooltip_basic" />;
