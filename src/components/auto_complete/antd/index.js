import React from 'react';
import { AutoComplete, Input } from 'antd';
const { TextArea } = Input;

function onSelect(value) {
  console.log('onSelect', value);
}

class Complete extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200, height: 50 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
        <TextArea onKeyPress={this.handleKeyPress} style={{ height: 50 }} />
      </AutoComplete>
    );
  }
}

export default function DemoComponent_auto_complete_antd() {
return(<Complete />);
};

export const demo = <DemoComponent_auto_complete_antd key="DemoComponent_auto_complete_antd" />;
