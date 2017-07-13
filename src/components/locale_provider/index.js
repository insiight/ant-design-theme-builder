
    import React from 'react';
    import { Card } from 'antd';
    import Demo_all from './all';
import Demo_basic from './basic';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_all /></Card>
<Card><Demo_basic /></Card>
      </div>);
    }
  