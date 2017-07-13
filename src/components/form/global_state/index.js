import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: {
        ...props.username,
        value: props.username.value.toUpperCase(),
      },
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </FormItem>
    </Form>
  );
});

class Demo extends React.Component {
  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
    },
  };
  handleFormChange = (changedFields) => {
    this.setState({
      fields: { ...this.state.fields, ...changedFields },
    });
  }
  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  }
}

export default function DemoComponent_form_global_state() {
return(<Demo />);
};

export const demo = <DemoComponent_form_global_state key="DemoComponent_form_global_state" />;
