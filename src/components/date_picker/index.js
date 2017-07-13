
    import React from 'react';
    import { Card } from 'antd';
    import Demo_basic from './basic';
import Demo_disabled_date from './disabled_date';
import Demo_disabled from './disabled';
import Demo_extra_footer from './extra_footer';
import Demo_format from './format';
import Demo_presetted_ranges from './presetted_ranges';
import Demo_size from './size';
import Demo_start_end from './start_end';
import Demo_time from './time';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_basic /></Card>
<Card><Demo_disabled_date /></Card>
<Card><Demo_disabled /></Card>
<Card><Demo_extra_footer /></Card>
<Card><Demo_format /></Card>
<Card><Demo_presetted_ranges /></Card>
<Card><Demo_size /></Card>
<Card><Demo_start_end /></Card>
<Card><Demo_time /></Card>
      </div>);
    }
  