import React from 'react';
import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

export default function DemoComponent_pagination_jump() {
return(
  <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />);
};

export const demo = <DemoComponent_pagination_jump key="DemoComponent_pagination_jump" />;
