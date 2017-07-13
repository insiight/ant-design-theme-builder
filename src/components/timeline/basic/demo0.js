import React from 'react';
import { Timeline } from 'antd';

export default function DemoComponent_timeline_basic() {
return(
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);
};

export const demo = <DemoComponent_timeline_basic key="DemoComponent_timeline_basic" />;
