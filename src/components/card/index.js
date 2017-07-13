
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_border_less from './border_less';
import Demo_grid_card from './grid_card';
import Demo_in_column from './in_column';
import Demo_loading from './loading';
import Demo_no_padding from './no_padding';
import Demo_simple from './simple';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_border_less /></Card>
<Card><Demo_grid_card /></Card>
<Card><Demo_in_column /></Card>
<Card><Demo_loading /></Card>
<Card><Demo_no_padding /></Card>
<Card><Demo_simple /></Card>
      </div>);
    }
  