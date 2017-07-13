import React from 'react';
import { BackTop } from 'antd';

export default function DemoComponent_back_top_custom() {
return(
  <div>
    <BackTop>
      <div className="ant-back-top-inner">UP</div>
    </BackTop>
    Scroll down to see the bottom-right
    <strong style={{ color: '#1088e9' }}> blue </strong>
    button.
  </div>);
};

export const demo = <DemoComponent_back_top_custom key="DemoComponent_back_top_custom" />;
