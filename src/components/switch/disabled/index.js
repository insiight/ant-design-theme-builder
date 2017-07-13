import React from 'react';
import { Switch, Button } from 'antd';

class App extends React.Component {
  state = {
    disabled: true,
  }
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} />
        <br />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    );
  }
}

export default function DemoComponent_switch_disabled() {
return(<App />);
};

export const demo = <DemoComponent_switch_disabled key="DemoComponent_switch_disabled" />;
