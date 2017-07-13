
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_digit from './digit';
import Demo_disabled from './disabled';
import Demo_formatter from './formatter';
import Demo_size from './size';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_digit /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_formatter /></Card>
<Card><Demo_size /></Card>
      </div>);
    }
  