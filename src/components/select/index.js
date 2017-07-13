
    import React from 'react';
    import { Card } from 'antd';
    import Demo_automatic_tokenization from './automatic_tokenization';
import Demo_basic from './basic';
import Demo_combobox from './combobox';
import Demo_coordinate from './coordinate';
import Demo_label_in_value from './label_in_value';
import Demo_multiple from './multiple';
import Demo_optgroup from './optgroup';
import Demo_search_box from './search_box';
import Demo_search from './search';
import Demo_select_users from './select_users';
import Demo_size from './size';
import Demo_tags from './tags';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_automatic_tokenization /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_combobox /></Card>
<Card><Demo_coordinate /></Card>
<Card><Demo_label_in_value /></Card>
<Card><Demo_multiple /></Card>
<Card><Demo_optgroup /></Card>
<Card><Demo_search_box /></Card>
<Card><Demo_search /></Card>
<Card><Demo_select_users /></Card>
<Card><Demo_size /></Card>
<Card><Demo_tags /></Card>
      </div>);
    }
  