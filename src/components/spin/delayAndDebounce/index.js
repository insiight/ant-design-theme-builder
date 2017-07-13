import './index.css';
import React from 'react';
import { Spin, Alert, Switch } from 'antd';

class Card extends React.Component {
  state = { loading: false }
  toggle = (value) => {
    this.setState({ loading: value });
  }
  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500} >{container}</Spin>
        Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
      </div>
    );
  }
}

export default function DemoComponent_spin_delayAndDebounce() {
return(<Card />);
};

export const demo = <DemoComponent_spin_delayAndDebounce key="DemoComponent_spin_delayAndDebounce" />;
