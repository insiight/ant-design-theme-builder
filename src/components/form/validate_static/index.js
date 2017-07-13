import React from 'react';
import { Form, Input, DatePicker, Col } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default function DemoComponent_form_validate_static() {
return(
  <Form>
    <FormItem
      {...formItemLayout}
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      validateStatus="warning"
    >
      <Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Success"
      hasFeedback
      validateStatus="success"
    >
      <Input placeholder="I'm the content" id="success" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Warning"
      hasFeedback
      validateStatus="warning"
    >
      <Input placeholder="Warning" id="warning" />
    </FormItem>

    <FormItem
      {...formItemLayout}
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </FormItem>

    <FormItem
      label="inline"
      labelCol={{
        xs: { span: 24 },
        sm: { span: 5 },
      }}
      wrapperCol={{
        xs: { span: 24 },
        sm: { span: 19 },
      }}
      help
    >
      <Col span={6}>
        <FormItem validateStatus="error" help="Please select the correct date">
          <DatePicker />
        </FormItem>
      </Col>
      <Col span={1}>
        <p className="ant-form-split">-</p>
      </Col>
      <Col span={6}>
        <FormItem>
          <DatePicker />
        </FormItem>
      </Col>
    </FormItem>
  </Form>
);
};

export const demo = <DemoComponent_form_validate_static key="DemoComponent_form_validate_static" />;
