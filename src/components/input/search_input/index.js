import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;

export default function DemoComponent_input_search_input() {
return(
  <Search
    placeholder="input search text"
    style={{ width: 200 }}
    onSearch={value => console.log(value)}
  />
);
};

export const demo = <DemoComponent_input_search_input key="DemoComponent_input_search_input" />;
