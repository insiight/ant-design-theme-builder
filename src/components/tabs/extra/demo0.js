import React from 'react';
import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;

const operations = <Button>Extra Action</Button>;

export default function DemoComponent_tabs_extra() {
return(
  <Tabs tabBarExtraContent={operations}>
    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
  </Tabs>
);
};

export const demo = <DemoComponent_tabs_extra key="DemoComponent_tabs_extra" />;
