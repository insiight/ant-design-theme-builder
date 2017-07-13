
    import React from 'react';
    import { Card } from 'antd';
    import Demo_12hours from './12hours';
import Demo_addon from './addon';
import Demo_basic from './basic';
import Demo_disable_options from './disable_options';
import Demo_disabled from './disabled';
import Demo_hide_column from './hide_column';
import Demo_size from './size';
import Demo_value from './value';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_12hours /></Card>
<Card><Demo_addon /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_disable_options /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_hide_column /></Card>
<Card><Demo_size /></Card>
<Card><Demo_value /></Card>
      </div>);
    }
  