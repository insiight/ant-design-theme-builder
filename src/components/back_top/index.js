
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_custom from './custom';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_custom /></Card>
      </div>);
    }
  