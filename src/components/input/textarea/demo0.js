import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

export default function DemoComponent_input_textarea() {
return(<TextArea rows={4} />);
};

export const demo = <DemoComponent_input_textarea key="DemoComponent_input_textarea" />;
