import React from 'react';
import { AutoComplete } from 'antd';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

function Complete() {
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  );
}

export default function DemoComponent_auto_complete_non_case_sensitive() {
return(<Complete />);
};

export const demo = <DemoComponent_auto_complete_non_case_sensitive key="DemoComponent_auto_complete_non_case_sensitive" />;
