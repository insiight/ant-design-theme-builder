import React from 'react';
import { Spin, Alert } from 'antd';

export default function DemoComponent_spin_tip() {
return(
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
);
};

export const demo = <DemoComponent_spin_tip key="DemoComponent_spin_tip" />;
