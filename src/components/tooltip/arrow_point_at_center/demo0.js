import React from 'react';
import { Tooltip, Button } from 'antd';

export default function DemoComponent_tooltip_arrow_point_at_center() {
return(
  <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </div>
);
};

export const demo = <DemoComponent_tooltip_arrow_point_at_center key="DemoComponent_tooltip_arrow_point_at_center" />;
