import React from 'react';
import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  isLeaf: false,
}];

class LazyOptions extends React.Component {
  state = {
    inputValue: '',
    options,
  };
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.setState({
      inputValue: selectedOptions.map(o => o.label).join(', '),
    });
  }
  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  }
  render() {
    return (
      <Cascader
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}

export default function DemoComponent_cascader_lazy() {
return(<LazyOptions />);
};

export const demo = <DemoComponent_cascader_lazy key="DemoComponent_cascader_lazy" />;
