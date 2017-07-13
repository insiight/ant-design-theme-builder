import React from 'react';
import { Mention } from 'antd';
const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

export default function DemoComponent_mention_multilines() {
return(
  <Mention
    style={{ width: '100%', height: 100 }}
    onChange={onChange}
    suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
    multiLines
  />
);
};

export const demo = <DemoComponent_mention_multilines key="DemoComponent_mention_multilines" />;
