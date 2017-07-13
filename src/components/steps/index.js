
    import React from 'react';
    import { Card } from 'antd';
    import Demo_customized_progress_dot from './customized_progress_dot';
import Demo_error from './error';
import Demo_icon from './icon';
import Demo_progress_dot from './progress_dot';
import Demo_simple from './simple';
import Demo_small_size from './small_size';
import Demo_step_next from './step_next';
import Demo_vertical_small from './vertical_small';
import Demo_vertical from './vertical';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_customized_progress_dot /></Card>
<Card><Demo_error /></Card>
<Card><Demo_icon /></Card>
<Card><Demo_progress_dot /></Card>
<Card><Demo_simple /></Card>
<Card><Demo_small_size /></Card>
<Card><Demo_step_next /></Card>
<Card><Demo_vertical_small /></Card>
<Card><Demo_vertical /></Card>
      </div>);
    }
  