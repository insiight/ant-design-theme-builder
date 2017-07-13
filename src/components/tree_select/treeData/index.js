import React from 'react';
import { TreeSelect } from 'antd';

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
}];

class Demo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }
  render() {
    return (
      <TreeSelect
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
      />
    );
  }
}

export default function DemoComponent_tree_select_treeData() {
return(<Demo />);
};

export const demo = <DemoComponent_tree_select_treeData key="DemoComponent_tree_select_treeData" />;
