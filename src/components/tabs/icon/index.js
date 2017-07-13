import React from 'react';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export default function DemoComponent_tabs_icon() {
return(
  <Tabs defaultActiveKey="2">
    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
      Tab 1
    </TabPane>
    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
      Tab 2
    </TabPane>
  </Tabs>
);
};

export const demo = <DemoComponent_tabs_icon key="DemoComponent_tabs_icon" />;
