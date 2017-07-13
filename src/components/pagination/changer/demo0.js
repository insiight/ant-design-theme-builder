import React from 'react';
import { Pagination } from 'antd';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

export default function DemoComponent_pagination_changer() {
return(
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
);
};

export const demo = <DemoComponent_pagination_changer key="DemoComponent_pagination_changer" />;
