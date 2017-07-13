import React from 'react';
import { Progress } from 'antd';

export default function DemoComponent_progress_circle() {
return(
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div>
);
};

export const demo = <DemoComponent_progress_circle key="DemoComponent_progress_circle" />;
