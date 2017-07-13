
    import React from 'react';
    import { Card } from 'antd';
    import Demo_async from './async';
import Demo_basic from './basic';
import Demo_confirm_promise from './confirm_promise';
import Demo_confirm from './confirm';
import Demo_footer from './footer';
import Demo_info from './info';
import Demo_locale from './locale';
import Demo_manual from './manual';
import Demo_position from './position';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_async /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_confirm_promise /></Card>
<Card><Demo_confirm /></Card>
<Card><Demo_footer /></Card>
<Card><Demo_info /></Card>
<Card><Demo_locale /></Card>
<Card><Demo_manual /></Card>
<Card><Demo_position /></Card>
      </div>);
    }
  