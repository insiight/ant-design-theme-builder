
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_custom_icon from './custom_icon';
import Demo_custom_style from './custom_style';
import Demo_duration from './duration';
import Demo_placement from './placement';
import Demo_with_btn from './with_btn';
import Demo_with_icon from './with_icon';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_custom_icon /></Card>
<Card><Demo_custom_style /></Card>
<Card><Demo_duration /></Card>
<Card><Demo_placement /></Card>
<Card><Demo_with_btn /></Card>
<Card><Demo_with_icon /></Card>
      </div>);
    }
  