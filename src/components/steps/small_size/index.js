import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

export default function DemoComponent_steps_small_size() {
return(
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
);
};

export const demo = <DemoComponent_steps_small_size key="DemoComponent_steps_small_size" />;
