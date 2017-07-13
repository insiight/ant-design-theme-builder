import React from 'react';
import { Pagination } from 'antd';

export default function DemoComponent_pagination_basic() {
return(<Pagination defaultCurrent={1} total={50} />);
};

export const demo = <DemoComponent_pagination_basic key="DemoComponent_pagination_basic" />;
