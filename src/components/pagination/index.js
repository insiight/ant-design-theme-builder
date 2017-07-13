
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_changer from './changer';
import Demo_controlled from './controlled';
import Demo_jump from './jump';
import Demo_mini from './mini';
import Demo_more from './more';
import Demo_simple from './simple';
import Demo_total from './total';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_changer /></Card>
<Card><Demo_controlled /></Card>
<Card><Demo_jump /></Card>
<Card><Demo_mini /></Card>
<Card><Demo_more /></Card>
<Card><Demo_simple /></Card>
<Card><Demo_total /></Card>
      </div>);
    }
  