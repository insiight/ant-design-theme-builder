import React from 'react';
import { Modal, Button } from 'antd';

function success() {
  const modal = Modal.success({
    title: 'This is a notification message',
    content: 'This modal will be destroyed after 1 second',
  });
  setTimeout(() => modal.destroy(), 1000);
}


export default function DemoComponent_modal_manual() {
return(
  <Button onClick={success}>Success</Button>);
};

export const demo = <DemoComponent_modal_manual key="DemoComponent_modal_manual" />;
