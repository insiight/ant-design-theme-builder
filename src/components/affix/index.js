
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_on_change from './on_change';
import Demo_target from './target';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_on_change /></Card>
<Card><Demo_target /></Card>
      </div>);
    }
  