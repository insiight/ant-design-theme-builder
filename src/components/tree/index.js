
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic_controlled from './basic_controlled';
import Demo_basic from './basic';
import Demo_customized_icon from './customized_icon';
import Demo_draggable from './draggable';
import Demo_dynamic from './dynamic';
import Demo_line from './line';
import Demo_search from './search';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic_controlled /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_customized_icon /></Card>
<Card><Demo_draggable /></Card>
<Card><Demo_dynamic /></Card>
<Card><Demo_line /></Card>
<Card><Demo_search /></Card>
      </div>);
    }
  