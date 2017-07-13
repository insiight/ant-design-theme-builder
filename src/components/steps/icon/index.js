import React from 'react';
import { Steps, Icon } from 'antd';
const Step = Steps.Step;

export default function DemoComponent_steps_icon() {
return(
  <Steps>
    <Step status="finish" title="Login" icon={<Icon type="user" />} />
    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
    <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
  </Steps>
);
};

export const demo = <DemoComponent_steps_icon key="DemoComponent_steps_icon" />;
