
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_character from './character';
import Demo_disabled from './disabled';
import Demo_half from './half';
import Demo_text from './text';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_character /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_half /></Card>
<Card><Demo_text /></Card>
      </div>);
    }
  