
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_event from './event';
import Demo_icon_slider from './icon_slider';
import Demo_input_number from './input_number';
import Demo_mark from './mark';
import Demo_tip_formatter from './tip_formatter';
import Demo_vertical from './vertical';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_event /></Card>
<Card><Demo_icon_slider /></Card>
<Card><Demo_input_number /></Card>
<Card><Demo_mark /></Card>
<Card><Demo_tip_formatter /></Card>
<Card><Demo_vertical /></Card>
      </div>);
    }
  