
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_color from './color';
import Demo_custom from './custom';
import Demo_pending from './pending';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_color /></Card>
<Card><Demo_custom /></Card>
<Card><Demo_pending /></Card>
      </div>);
    }
  