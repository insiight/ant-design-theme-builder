
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_card_top from './card_top';
import Demo_card from './card';
import Demo_custom_add_trigger from './custom_add_trigger';
import Demo_disabled from './disabled';
import Demo_editable_card from './editable_card';
import Demo_extra from './extra';
import Demo_icon from './icon';
import Demo_position from './position';
import Demo_size from './size';
import Demo_slide from './slide';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_card_top /></Card>
<Card><Demo_card /></Card>
<Card><Demo_custom_add_trigger /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_editable_card /></Card>
<Card><Demo_extra /></Card>
<Card><Demo_icon /></Card>
<Card><Demo_position /></Card>
<Card><Demo_size /></Card>
<Card><Demo_slide /></Card>
      </div>);
    }
  