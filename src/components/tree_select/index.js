
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_checkable from './checkable';
import Demo_treeData from './treeData';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_checkable /></Card>
<Card><Demo_treeData /></Card>
      </div>);
    }
  