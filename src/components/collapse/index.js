
    import React from 'react';
    import { Card } from 'antd';
    import Demo_accordion from './accordion';
import Demo_basic from './basic';
import Demo_borderless from './borderless';
import Demo_custom from './custom';
import Demo_mix from './mix';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_accordion /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_borderless /></Card>
<Card><Demo_custom /></Card>
<Card><Demo_mix /></Card>
      </div>);
    }
  