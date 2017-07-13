
    import React from 'react';
    import { Card } from 'antd';
    import Demo_arrow_point_at_center from './arrow_point_at_center';
import Demo_basic from './basic';
import Demo_control from './control';
import Demo_placement from './placement';
import Demo_triggerType from './triggerType';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_arrow_point_at_center /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_control /></Card>
<Card><Demo_placement /></Card>
<Card><Demo_triggerType /></Card>
      </div>);
    }
  