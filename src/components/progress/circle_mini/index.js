import React from 'react';
import { Progress } from 'antd';

export default function DemoComponent_progress_circle_mini() {
return(
  <div>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </div>
);
};

export const demo = <DemoComponent_progress_circle_mini key="DemoComponent_progress_circle_mini" />;
