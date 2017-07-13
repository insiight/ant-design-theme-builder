import React from 'react';
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

export default function DemoComponent_modal_confirm() {
return(
  <Button onClick={showConfirm}>
    Confirm
  </Button>
);
};

export const demo = <DemoComponent_modal_confirm key="DemoComponent_modal_confirm" />;
