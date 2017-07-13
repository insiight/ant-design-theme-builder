
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_checkable from './checkable';
import Demo_colorful from './colorful';
import Demo_control from './control';
import Demo_hot_tags from './hot_tags';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_checkable /></Card>
<Card><Demo_colorful /></Card>
<Card><Demo_control /></Card>
<Card><Demo_hot_tags /></Card>
      </div>);
    }
  