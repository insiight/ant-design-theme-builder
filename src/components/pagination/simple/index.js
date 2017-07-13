import React from 'react';
import { Pagination } from 'antd';

export default function DemoComponent_pagination_simple() {
return(
  <Pagination simple defaultCurrent={2} total={50} />
);
};

export const demo = <DemoComponent_pagination_simple key="DemoComponent_pagination_simple" />;
