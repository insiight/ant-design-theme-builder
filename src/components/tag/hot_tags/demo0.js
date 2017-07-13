import React from 'react';
import { Tag } from 'antd';
const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['Movie', 'Books', 'Music'];

class HotTags extends React.Component {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ?
            [...selectedTags, tag] :
            selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div>
        <strong>Hots: </strong>
        {tagsFromServer.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}

export default function DemoComponent_tag_hot_tags() {
return(<HotTags />);
};

export const demo = <DemoComponent_tag_hot_tags key="DemoComponent_tag_hot_tags" />;
