import React from 'react';
import { BackTop } from 'antd';

export default function DemoComponent_back_top_basic() {
return(
  <div>
    <BackTop />
    Scroll down to see the bottom-right
    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
    button.
  </div>);
};

export const demo = <DemoComponent_back_top_basic key="DemoComponent_back_top_basic" />;
