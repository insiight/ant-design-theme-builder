import React from 'react';
import { Timeline } from 'antd';

export default function DemoComponent_timeline_pending() {
return(
  <Timeline pending={<a href="#">See more</a>}>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
  </Timeline>
);
};

export const demo = <DemoComponent_timeline_pending key="DemoComponent_timeline_pending" />;
