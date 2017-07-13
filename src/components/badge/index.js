
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_change from './change';
import Demo_dot from './dot';
import Demo_link from './link';
import Demo_no_wrapper from './no_wrapper';
import Demo_overflow from './overflow';
import Demo_status from './status';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_change /></Card>
<Card><Demo_dot /></Card>
<Card><Demo_link /></Card>
<Card><Demo_no_wrapper /></Card>
<Card><Demo_overflow /></Card>
<Card><Demo_status /></Card>
      </div>);
    }
  