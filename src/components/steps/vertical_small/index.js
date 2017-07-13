import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

export default function DemoComponent_steps_vertical_small() {
return(
  <Steps direction="vertical" size="small" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
);
};

export const demo = <DemoComponent_steps_vertical_small key="DemoComponent_steps_vertical_small" />;
