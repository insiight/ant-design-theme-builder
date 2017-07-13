import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import VARIABLES from './variable';
const FormItem = Form.Item;
import { setLessVariables } from './less';

const defaultVariables = {};
Object.keys(VARIABLES).forEach(key => defaultVariables[key] = VARIABLES[key].default);

class ThemeBuilder extends React.Component {
  state = {
    search: '',
    codeVisible: false,
    variables: defaultVariables,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        setLessVariables(values);
        this.setState({
          variables: values,
        })
      }
    });
  }

  getCode() {
    const newVariables = this.state.variables;
    const code = {};
    Object.keys(newVariables).forEach(key => {
      if (newVariables[key] !== VARIABLES[key].default) {
        code[key] = newVariables[key];
      }
    });

    let codeString = '';
    Object.keys(code).forEach(key => {
      codeString += `@${key}: ${code[key]}\n`;
    });

    return codeString;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: '20px' }}>
        <FormItem>
          <Input.Search
            placeholder="search variables"
            onSearch={value => {
              this.setState({ search: value });
            }}
          />
          <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: 10 }}>Update</Button>
          <Button type="secondary" onClick={() => this.setState({ codeVisible: true })} style={{ width: '100%', marginTop: 10 }}>View Code</Button>
          <Modal
            title="Basic Modal"
            visible={this.state.codeVisible}
            onOk={() => this.setState({ codeVisible: false })}
            onCancel={() => this.setState({ codeVisible: false })}>
            <pre>
              {this.getCode()}
            </pre>
          </Modal>
        </FormItem>
        {Object
          .keys(VARIABLES)
          .filter(variable => (!this.state.search || variable.includes(this.state.search)))
          .map(variable => {
            return <FormItem
              help={variable}
              key={variable}>
              {getFieldDecorator(variable, {
                initialValue: VARIABLES[variable].default,
                rules: [{ required: true, message: 'Please input the variable value!' }],
              })(
                <Input placeholder={variable} />
              )}
            </FormItem>
          })}
      </Form>
    );
  }
}

ThemeBuilder.defaultProps = {
  onChange: () => null,
};

export default Form.create()(ThemeBuilder);
