
    import React from 'react';
    import { Card } from 'antd';
    import Demo_advanced from './advanced';
import Demo_basic from './basic';
import Demo_custom_item from './custom_item';
import Demo_large_data from './large_data';
import Demo_search from './search';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_advanced /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_custom_item /></Card>
<Card><Demo_large_data /></Card>
<Card><Demo_search /></Card>
      </div>);
    }
  