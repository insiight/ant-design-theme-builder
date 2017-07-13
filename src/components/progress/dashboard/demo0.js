import React from 'react';
import { Progress } from 'antd';

export default function DemoComponent_progress_dashboard() {
return(<Progress type="dashboard" percent={75} />);
};

export const demo = <DemoComponent_progress_dashboard key="DemoComponent_progress_dashboard" />;
