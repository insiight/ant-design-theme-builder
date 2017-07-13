
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_custom_trigger from './custom_trigger';
import Demo_fixed_sider from './fixed_sider';
import Demo_fixed from './fixed';
import Demo_responsive from './responsive';
import Demo_side from './side';
import Demo_top_side_2 from './top_side_2';
import Demo_top_side from './top_side';
import Demo_top from './top';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_custom_trigger /></Card>
<Card><Demo_fixed_sider /></Card>
<Card><Demo_fixed /></Card>
<Card><Demo_responsive /></Card>
<Card><Demo_side /></Card>
<Card><Demo_top_side_2 /></Card>
<Card><Demo_top_side /></Card>
<Card><Demo_top /></Card>
      </div>);
    }
  