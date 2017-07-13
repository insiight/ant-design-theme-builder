import React from 'react';
import { TimePicker } from 'antd';

class Demo extends React.Component {
  state = {
    value: null,
  };

  onChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  }

  render() {
    return <TimePicker value={this.state.value} onChange={this.onChange} />;
  }
}

export default function DemoComponent_time_picker_value() {
return(<Demo />);
};

export const demo = <DemoComponent_time_picker_value key="DemoComponent_time_picker_value" />;
