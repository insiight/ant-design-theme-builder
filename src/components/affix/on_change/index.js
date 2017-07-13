import React from 'react';
import { Affix, Button } from 'antd';

export default function DemoComponent_affix_on_change() {
return(
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>);
};

export const demo = <DemoComponent_affix_on_change key="DemoComponent_affix_on_change" />;
