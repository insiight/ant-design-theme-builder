import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default function DemoComponent_tabs_size() {
return(
  <Tabs defaultActiveKey="2" size="small">
    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
  </Tabs>
);
};

export const demo = <DemoComponent_tabs_size key="DemoComponent_tabs_size" />;
