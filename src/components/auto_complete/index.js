
    import React from 'react';
    import { Card } from 'antd';
    import Demo_antd from './antd';
import Demo_basic from './basic';
import Demo_certain_category from './certain_category';
import Demo_non_case_sensitive from './non_case_sensitive';
import Demo_options from './options';
import Demo_uncertain_category from './uncertain_category';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_antd /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_certain_category /></Card>
<Card><Demo_non_case_sensitive /></Card>
<Card><Demo_options /></Card>
<Card><Demo_uncertain_category /></Card>
      </div>);
    }
  