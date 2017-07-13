import React from 'react';
import { Mention, Popover, Button } from 'antd';
const { toString, toContentState } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

class PopoverContainer extends React.Component {
  getSuggestionContainer = () => {
    return this.popover.getPopupDomNode();
  }
  render() {
    const mention = (
      <Mention
        style={{ width: '100%', height: 100 }}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
        getSuggestionContainer={this.getSuggestionContainer}
      />
    );
    return (
      <Popover trigger="click" content={mention} title="Title" ref={popover => this.popover = popover}>
        <Button type="primary">Click Me</Button>
      </Popover>
    );
  }
}

export default function DemoComponent_mention_popupContainer() {
return(<PopoverContainer />);
};

export const demo = <DemoComponent_mention_popupContainer key="DemoComponent_mention_popupContainer" />;
