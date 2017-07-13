
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_card from './card';
import Demo_notice_calendar from './notice_calendar';
import Demo_select from './select';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_card /></Card>
<Card><Demo_notice_calendar /></Card>
<Card><Demo_select /></Card>
      </div>);
    }
  