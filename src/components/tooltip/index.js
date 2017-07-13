
    import React from 'react';
    import { Card } from 'antd';
    import Demo_arrow_point_at_center from './arrow_point_at_center';
import Demo_auto_adjust_overflow from './auto_adjust_overflow';
import Demo_basic from './basic';
import Demo_placement from './placement';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_arrow_point_at_center /></Card>
<Card><Demo_auto_adjust_overflow /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_placement /></Card>
      </div>);
    }
  