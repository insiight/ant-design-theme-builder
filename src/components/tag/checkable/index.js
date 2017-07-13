import React from 'react';
import { Tag } from 'antd';
const { CheckableTag } = Tag;

class MyTag extends React.Component {
  state = { checked: true };
  handleChange = (checked) => {
    this.setState({ checked });
  }
  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}

export default function DemoComponent_tag_checkable() {
return(
  <div>
    <MyTag>Tag1</MyTag>
    <MyTag>Tag2</MyTag>
    <MyTag>Tag3</MyTag>
  </div>
);
};

export const demo = <DemoComponent_tag_checkable key="DemoComponent_tag_checkable" />;
