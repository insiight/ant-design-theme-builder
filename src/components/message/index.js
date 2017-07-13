
    import React from 'react';
    import { Card } from 'antd';
    import Demo_duration from './duration';
import Demo_info from './info';
import Demo_loading from './loading';
import Demo_other from './other';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_duration /></Card>
<Card><Demo_info /></Card>
<Card><Demo_loading /></Card>
<Card><Demo_other /></Card>
      </div>);
    }
  