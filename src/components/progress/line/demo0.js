import React from 'react';
import { Progress } from 'antd';

export default function DemoComponent_progress_line() {
return(
  <div>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </div>
);
};

export const demo = <DemoComponent_progress_line key="DemoComponent_progress_line" />;
