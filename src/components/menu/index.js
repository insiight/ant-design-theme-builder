
    import React from 'react';
    import { Card } from 'antd';
    import Demo_horizontal from './horizontal';
import Demo_inline_collapsed from './inline_collapsed';
import Demo_inline from './inline';
import Demo_sider_current from './sider_current';
import Demo_switch_mode from './switch_mode';
import Demo_theme from './theme';
import Demo_vertical from './vertical';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_horizontal /></Card>
<Card><Demo_inline_collapsed /></Card>
<Card><Demo_inline /></Card>
<Card><Demo_sider_current /></Card>
<Card><Demo_switch_mode /></Card>
<Card><Demo_theme /></Card>
<Card><Demo_vertical /></Card>
      </div>);
    }
  