
    import React from 'react';
    import { Card } from 'antd';
    import Demo_banner from './banner';
import Demo_basic from './basic';
import Demo_closable from './closable';
import Demo_close_text from './close_text';
import Demo_description from './description';
import Demo_icon from './icon';
import Demo_style from './style';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_banner /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_closable /></Card>
<Card><Demo_close_text /></Card>
<Card><Demo_description /></Card>
<Card><Demo_icon /></Card>
<Card><Demo_style /></Card>
      </div>);
    }
  