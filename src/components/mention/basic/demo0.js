import React from 'react';
import { Mention } from 'antd';
const { toString, toContentState } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

export default function DemoComponent_mention_basic() {
return(
  <Mention
    style={{ width: '100%', height: 100 }}
    onChange={onChange}
    defaultValue={toContentState('@afc163')}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
    onSelect={onSelect}
  />
);
};

export const demo = <DemoComponent_mention_basic key="DemoComponent_mention_basic" />;
