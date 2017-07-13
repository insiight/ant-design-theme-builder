
    import React from 'react';
    import { Card } from 'antd';
    import Demo_ajax from './ajax';
import Demo_basic from './basic';
import Demo_bordered from './bordered';
import Demo_colspan_rowspan from './colspan_rowspan';
import Demo_custom_filter_panel from './custom_filter_panel';
import Demo_dynamic_settings from './dynamic_settings';
import Demo_edit_cell from './edit_cell';
import Demo_edit_row from './edit_row';
import Demo_expand_children from './expand_children';
import Demo_expand from './expand';
import Demo_fixed_columns_header from './fixed_columns_header';
import Demo_fixed_columns from './fixed_columns';
import Demo_fixed_header from './fixed_header';
import Demo_head from './head';
import Demo_jsx from './jsx';
import Demo_nested_table from './nested_table';
import Demo_reset_filter from './reset_filter';
import Demo_row_selection_and_operation from './row_selection_and_operation';
import Demo_row_selection_custom from './row_selection_custom';
import Demo_row_selection from './row_selection';
import Demo_size from './size';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_ajax /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_bordered /></Card>
<Card><Demo_colspan_rowspan /></Card>
<Card><Demo_custom_filter_panel /></Card>
<Card><Demo_dynamic_settings /></Card>
<Card><Demo_edit_cell /></Card>
<Card><Demo_edit_row /></Card>
<Card><Demo_expand_children /></Card>
<Card><Demo_expand /></Card>
<Card><Demo_fixed_columns_header /></Card>
<Card><Demo_fixed_columns /></Card>
<Card><Demo_fixed_header /></Card>
<Card><Demo_head /></Card>
<Card><Demo_jsx /></Card>
<Card><Demo_nested_table /></Card>
<Card><Demo_reset_filter /></Card>
<Card><Demo_row_selection_and_operation /></Card>
<Card><Demo_row_selection_custom /></Card>
<Card><Demo_row_selection /></Card>
<Card><Demo_size /></Card>
      </div>);
    }
  