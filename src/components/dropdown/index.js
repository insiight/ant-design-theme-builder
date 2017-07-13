
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_dropdown_button from './dropdown_button';
import Demo_event from './event';
import Demo_item from './item';
import Demo_overlay_visible from './overlay_visible';
import Demo_placement from './placement';
import Demo_sub_menu from './sub_menu';
import Demo_trigger from './trigger';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_dropdown_button /></Card>
<Card><Demo_event /></Card>
<Card><Demo_item /></Card>
<Card><Demo_overlay_visible /></Card>
<Card><Demo_placement /></Card>
<Card><Demo_sub_menu /></Card>
<Card><Demo_trigger /></Card>
      </div>);
    }
  