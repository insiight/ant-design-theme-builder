import React from 'react';
import { Tooltip } from 'antd';
const text = <span>prompt text</span>;

export default function DemoComponent_tooltip_placement() {
return(
  <div>
    <div style={{ marginLeft: 60 }}>
      <Tooltip placement="topLeft" title={text}>
        <a href="#">TL</a>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <a href="#">Top</a>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <a href="#">TR</a>
      </Tooltip>
    </div>
    <div style={{ width: 60, float: 'left' }}>
      <Tooltip placement="leftTop" title={text}>
        <a href="#">LT</a>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <a href="#">Left</a>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <a href="#">LB</a>
      </Tooltip>
    </div>
    <div style={{ width: 60, marginLeft: 270 }}>
      <Tooltip placement="rightTop" title={text}>
        <a href="#">RT</a>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <a href="#">Right</a>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <a href="#">RB</a>
      </Tooltip>
    </div>
    <div style={{ marginLeft: 60, clear: 'both' }}>
      <Tooltip placement="bottomLeft" title={text}>
        <a href="#">BL</a>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <a href="#">Bottom</a>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <a href="#">BR</a>
      </Tooltip>
    </div>
  </div>
);
};

export const demo = <DemoComponent_tooltip_placement key="DemoComponent_tooltip_placement" />;
