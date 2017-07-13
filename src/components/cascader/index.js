
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_change_on_select from './change_on_select';
import Demo_custom_render from './custom_render';
import Demo_custom_trigger from './custom_trigger';
import Demo_default_value from './default_value';
import Demo_disabled_option from './disabled_option';
import Demo_hover from './hover';
import Demo_lazy from './lazy';
import Demo_search from './search';
import Demo_size from './size';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_change_on_select /></Card>
<Card><Demo_custom_render /></Card>
<Card><Demo_custom_trigger /></Card>
<Card><Demo_default_value /></Card>
<Card><Demo_disabled_option /></Card>
<Card><Demo_hover /></Card>
<Card><Demo_lazy /></Card>
<Card><Demo_search /></Card>
<Card><Demo_size /></Card>
      </div>);
    }
  