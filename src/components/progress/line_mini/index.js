import React from 'react';
import { Progress } from 'antd';

export default function DemoComponent_progress_line_mini() {
return(
  <div style={{ width: 170 }}>
    <Progress percent={30} strokeWidth={5} />
    <Progress percent={50} strokeWidth={5} status="active" />
    <Progress percent={70} strokeWidth={5} status="exception" />
    <Progress percent={100} strokeWidth={5} />
  </div>
);
};

export const demo = <DemoComponent_progress_line_mini key="DemoComponent_progress_line_mini" />;
