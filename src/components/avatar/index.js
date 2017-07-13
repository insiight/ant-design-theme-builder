
    import React from 'react';
    import { Card } from 'antd';
    import Demo_badge from './badge';
import Demo_basic from './basic';
import Demo_dynamic from './dynamic';
import Demo_type from './type';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_badge /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_dynamic /></Card>
<Card><Demo_type /></Card>
      </div>);
    }
  