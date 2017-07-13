import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

export default function DemoComponent_input_autosize_textarea() {
return(
  <div>
    <TextArea placeholder="Autosize height based on content lines" autosize />
    <div style={{ margin: '24px 0' }} />
    <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
  </div>
);
};

export const demo = <DemoComponent_input_autosize_textarea key="DemoComponent_input_autosize_textarea" />;
