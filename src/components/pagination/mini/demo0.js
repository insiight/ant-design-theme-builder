import React from 'react';
import { Pagination } from 'antd';

function showTotal(total) {
  return `Total ${total} items`;
}

export default function DemoComponent_pagination_mini() {
return(
  <div>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </div>
);
};

export const demo = <DemoComponent_pagination_mini key="DemoComponent_pagination_mini" />;
