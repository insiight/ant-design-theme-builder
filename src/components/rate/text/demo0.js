import React from 'react';
import { Rate } from 'antd';

class Rater extends React.Component {
  state = {
    value: 3,
    count: null,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
    );
  }
}

export default function DemoComponent_rate_text() {
return(<Rater />);
};

export const demo = <DemoComponent_rate_text key="DemoComponent_rate_text" />;
