
    import React from 'react';
    import { Card } from 'antd';
    import Demo_async from './async';
import Demo_avatar from './avatar';
import Demo_basic from './basic';
import Demo_controllder_simple from './controllder_simple';
import Demo_controlled from './controlled';
import Demo_custom_tag from './custom_tag';
import Demo_multilines from './multilines';
import Demo_multiple_trigger from './multiple_trigger';
import Demo_popupContainer from './popupContainer';
import Demo_readonly from './readonly';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_async /></Card>
<Card><Demo_avatar /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_controllder_simple /></Card>
<Card><Demo_controlled /></Card>
<Card><Demo_custom_tag /></Card>
<Card><Demo_multilines /></Card>
<Card><Demo_multiple_trigger /></Card>
<Card><Demo_popupContainer /></Card>
<Card><Demo_readonly /></Card>
      </div>);
    }
  