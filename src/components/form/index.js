
    import React from 'react';
    import { Card } from 'antd';
    import Demo_advanced_search from './advanced_search';
import Demo_coordinated from './coordinated';
import Demo_customized_form_controls from './customized_form_controls';
import Demo_dynamic_form_item from './dynamic_form_item';
import Demo_dynamic_rule from './dynamic_rule';
import Demo_form_in_modal from './form_in_modal';
import Demo_global_state from './global_state';
import Demo_horizontal_login from './horizontal_login';
import Demo_layout from './layout';
import Demo_normal_login from './normal_login';
import Demo_register from './register';
import Demo_time_related_controls from './time_related_controls';
import Demo_validate_other from './validate_other';
import Demo_validate_static from './validate_static';
import Demo_without_form_create from './without_form_create';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_advanced_search /></Card>
<Card><Demo_coordinated /></Card>
<Card><Demo_customized_form_controls /></Card>
<Card><Demo_dynamic_form_item /></Card>
<Card><Demo_dynamic_rule /></Card>
<Card><Demo_form_in_modal /></Card>
<Card><Demo_global_state /></Card>
<Card><Demo_horizontal_login /></Card>
<Card><Demo_layout /></Card>
<Card><Demo_normal_login /></Card>
<Card><Demo_register /></Card>
<Card><Demo_time_related_controls /></Card>
<Card><Demo_validate_other /></Card>
<Card><Demo_validate_static /></Card>
<Card><Demo_without_form_create /></Card>
      </div>);
    }
  