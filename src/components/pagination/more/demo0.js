import React from 'react';
import { Pagination } from 'antd';

export default function DemoComponent_pagination_more() {
return(
  <Pagination defaultCurrent={6} total={500} />
);
};

export const demo = <DemoComponent_pagination_more key="DemoComponent_pagination_more" />;
