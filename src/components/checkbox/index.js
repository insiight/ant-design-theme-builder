
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_check_all from './check_all';
import Demo_controller from './controller';
import Demo_disabled from './disabled';
import Demo_group from './group';
import Demo_layout from './layout';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_check_all /></Card>
<Card><Demo_controller /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_group /></Card>
<Card><Demo_layout /></Card>
      </div>);
    }
  