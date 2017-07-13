
    import React from 'react';
    import { Card } from 'antd';
    import Demo_autoplay from './autoplay';
import Demo_basic from './basic';
import Demo_fade from './fade';
import Demo_vertical from './vertical';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_autoplay /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_fade /></Card>
<Card><Demo_vertical /></Card>
      </div>);
    }
  