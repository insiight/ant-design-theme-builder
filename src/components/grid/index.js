
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_flex_align from './flex_align';
import Demo_flex_order from './flex_order';
import Demo_flex from './flex';
import Demo_gutter from './gutter';
import Demo_offset from './offset';
import Demo_playground from './playground';
import Demo_reponsive_more from './reponsive_more';
import Demo_reponsive from './reponsive';
import Demo_sort from './sort';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_flex_align /></Card>
<Card><Demo_flex_order /></Card>
<Card><Demo_flex /></Card>
<Card><Demo_gutter /></Card>
<Card><Demo_offset /></Card>
<Card><Demo_playground /></Card>
<Card><Demo_reponsive_more /></Card>
<Card><Demo_reponsive /></Card>
<Card><Demo_sort /></Card>
      </div>);
    }
  