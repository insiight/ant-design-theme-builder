import React from 'react';
import { Affix, Button } from 'antd';

export default function DemoComponent_affix_basic() {
return(
  <div>
    <Affix>
      <Button type="primary">Affix top</Button>
    </Affix>
    <br />
    <Affix offsetBottom={0}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  </div>);
};

export const demo = <DemoComponent_affix_basic key="DemoComponent_affix_basic" />;
