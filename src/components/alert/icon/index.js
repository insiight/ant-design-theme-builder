import React from 'react';
import { Alert } from 'antd';

export default function DemoComponent_alert_icon() {
return(<div>
  <Alert message="Success Tips" type="success" showIcon />
  <Alert message="Informational Notes" type="info" showIcon />
  <Alert message="Warning" type="warning" showIcon />
  <Alert message="Error" type="error" showIcon />
  <Alert
    message="success tips"
    description="Detailed description and advices about successful copywriting."
    type="success"
    showIcon
  />
  <Alert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    showIcon
  />
  <Alert
    message="Warning"
    description="This is a warning notice about copywriting."
    type="warning"
    showIcon
  />
  <Alert
    message="Error"
    description="This is an error message about copywriting."
    type="error"
    showIcon
  />
</div>);
};

export const demo = <DemoComponent_alert_icon key="DemoComponent_alert_icon" />;
