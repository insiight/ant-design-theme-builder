import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default function DemoComponent_tabs_disabled() {
return(
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
    <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
  </Tabs>
);
};

export const demo = <DemoComponent_tabs_disabled key="DemoComponent_tabs_disabled" />;
