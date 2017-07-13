
    import React from 'react';
    import { Card } from 'antd';
    import Demo_avatar from './avatar';
import Demo_basic from './basic';
import Demo_defaultFileList from './defaultFileList';
import Demo_drag from './drag';
import Demo_fileList from './fileList';
import Demo_picture_card from './picture_card';
import Demo_picture_style from './picture_style';
    
    export default function Demo() {
      return (<div>
        <Card><Demo_avatar /></Card>
<Card><Demo_basic /></Card>
<Card><Demo_defaultFileList /></Card>
<Card><Demo_drag /></Card>
<Card><Demo_fileList /></Card>
<Card><Demo_picture_card /></Card>
<Card><Demo_picture_style /></Card>
      </div>);
    }
  