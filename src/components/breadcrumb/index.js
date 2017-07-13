
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_router_4 from './router_4';
import Demo_router from './router';
import Demo_separator from './separator';
import Demo_withIcon from './withIcon';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_router_4 /></Card>
<Card><Demo_router /></Card>
<Card><Demo_separator /></Card>
<Card><Demo_withIcon /></Card>
      </div>);
    }
  