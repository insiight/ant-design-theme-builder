import React from 'react';
import { Switch, Icon } from 'antd';

export default function DemoComponent_switch_text() {
return(<div>
  <Switch checkedChildren="开" unCheckedChildren="关" />
  <br />
  <Switch checkedChildren="1" unCheckedChildren="0" />
  <br />
  <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
</div>);
};

export const demo = <DemoComponent_switch_text key="DemoComponent_switch_text" />;
