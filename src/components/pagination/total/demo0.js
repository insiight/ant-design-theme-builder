import React from 'react';
import { Pagination } from 'antd';

export default function DemoComponent_pagination_total() {
return(
  <div>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      pageSize={20}
      defaultCurrent={1}
    />
  </div>
);
};

export const demo = <DemoComponent_pagination_total key="DemoComponent_pagination_total" />;
