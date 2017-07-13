import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default function DemoComponent_table_fixed_header() {
return(
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
);
};

export const demo = <DemoComponent_table_fixed_header key="DemoComponent_table_fixed_header" />;
