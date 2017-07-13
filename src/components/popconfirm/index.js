
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_dynamic_trigger from './dynamic_trigger';
import Demo_locale from './locale';
import Demo_placement from './placement';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_dynamic_trigger /></Card>
<Card><Demo_locale /></Card>
<Card><Demo_placement /></Card>
      </div>);
    }
  