import React from 'react';
import { Steps, Popover } from 'antd';
const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);

export default function DemoComponent_steps_customized_progress_dot() {
return(
  <Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>
);
};

export const demo = <DemoComponent_steps_customized_progress_dot key="DemoComponent_steps_customized_progress_dot" />;
