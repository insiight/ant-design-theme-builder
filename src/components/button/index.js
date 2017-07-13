
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_button_group from './button_group';
import Demo_disabled from './disabled';
import Demo_ghost from './ghost';
import Demo_icon from './icon';
import Demo_loading from './loading';
import Demo_multiple from './multiple';
import Demo_size from './size';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_button_group /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_ghost /></Card>
<Card><Demo_icon /></Card>
<Card><Demo_loading /></Card>
<Card><Demo_multiple /></Card>
<Card><Demo_size /></Card>
      </div>);
    }
  