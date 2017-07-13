import React from 'react';
import { Alert } from 'antd';

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

export default function DemoComponent_alert_closable() {
return(<div>
  <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
    type="warning"
    closable
    onClose={onClose}
  />
  <Alert message="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    closable
    onClose={onClose}
  />
</div>);
};

export const demo = <DemoComponent_alert_closable key="DemoComponent_alert_closable" />;
