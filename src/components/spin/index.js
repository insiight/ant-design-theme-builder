
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_delayAndDebounce from './delayAndDebounce';
import Demo_inside from './inside';
import Demo_nested from './nested';
import Demo_size from './size';
import Demo_tip from './tip';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_delayAndDebounce /></Card>
<Card><Demo_inside /></Card>
<Card><Demo_nested /></Card>
<Card><Demo_size /></Card>
<Card><Demo_tip /></Card>
      </div>);
    }
  