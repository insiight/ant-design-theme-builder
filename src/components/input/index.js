
    import React from 'react';
    import { Card } from 'antd';
    import Demo_addon from './addon';
import Demo_autosize_textarea from './autosize_textarea';
import Demo_basic from './basic';
import Demo_group from './group';
import Demo_presuffix from './presuffix';
import Demo_search_input from './search_input';
import Demo_size from './size';
import Demo_textarea from './textarea';
import Demo_tooltip from './tooltip';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_addon /></Card>
<Card><Demo_autosize_textarea /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_group /></Card>
<Card><Demo_presuffix /></Card>
<Card><Demo_search_input /></Card>
<Card><Demo_size /></Card>
<Card><Demo_textarea /></Card>
<Card><Demo_tooltip /></Card>
      </div>);
    }
  