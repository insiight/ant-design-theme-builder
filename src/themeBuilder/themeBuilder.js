import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import VARIABLES from './variable';
const FormItem = Form.Item;
import { setLessVariables } from './less';
const localStorage = window.localStorage;
const STORAGE_KEY = 'THEME_VARIABLES';

let userSavedVariables = JSON.parse(localStorage.getItem('STORAGE_KEY') || '{}') ;
const defaultVariables = {};
Object.keys(VARIABLES).forEach(key => defaultVariables[key] = VARIABLES[key].default);

class ThemeBuilder extends React.Component {
  state = {
    search: '',
    codeVisible: false,
    variables: {
      ...defaultVariables,
      ...userSavedVariables,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const newValues = { ...this.state.variables, ...values };
        setLessVariables(newValues);
        this.setState({
          variables: newValues,
        });
        localStorage.setItem('STORAGE_KEY', JSON.stringify(newValues));
      }
    });
  };

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

  componentDidMount() {
    setLessVariables(this.state.variables);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: '20px' }}>
        <FormItem>
          <Input.Search
            placeholder="search variables"
            onChange={e => {
              this.setState({ search: e.target.value });
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
          .keys(this.state.variables)
          .filter(key => (!this.state.search || key.includes(this.state.search)))
          .map(key => {
            return <FormItem
              help={key}
              key={key}>
              {getFieldDecorator(key, {
                initialValue: this.state.variables[key],
                rules: [{ required: true, message: 'Please input the variable value!' }],
              })(
                <Input placeholder={key} />
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
