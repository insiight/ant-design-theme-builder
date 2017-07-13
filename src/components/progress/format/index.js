import React from 'react';
import { Progress } from 'antd';

export default function DemoComponent_progress_format() {
return(
  <div>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>
);
};

export const demo = <DemoComponent_progress_format key="DemoComponent_progress_format" />;
