
    import React from 'react';
    import { Card } from 'antd';
    import Demo_circle_dynamic from './circle_dynamic';
import Demo_circle_mini from './circle_mini';
import Demo_circle from './circle';
import Demo_dashboard from './dashboard';
import Demo_dynamic from './dynamic';
import Demo_format from './format';
import Demo_line_mini from './line_mini';
import Demo_line from './line';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_circle_dynamic /></Card>
<Card><Demo_circle_mini /></Card>
<Card><Demo_circle /></Card>
<Card><Demo_dashboard /></Card>
<Card><Demo_dynamic /></Card>
<Card><Demo_format /></Card>
<Card><Demo_line_mini /></Card>
<Card><Demo_line /></Card>
      </div>);
    }
  