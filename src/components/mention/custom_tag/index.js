import React from 'react';
import { Mention } from 'antd';
const Nav = Mention.Nav;

const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
];

function onSelect(suggestion, data) {
  console.log('onSelect', suggestion, data);
}

class CustomNavMention extends React.Component {
  state = {
    suggestions: [],
  }
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
      >
        <span>{suggestion.name} - {suggestion.type}</span>
      </Nav>
    ));
    this.setState({ suggestions });
  }
  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        placeholder="@someone"
        style={{ width: '100%', height: 100 }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
        onSelect={onSelect}
      />
    );
  }
}

export default function DemoComponent_mention_custom_tag() {
return(<CustomNavMention />);
};

export const demo = <DemoComponent_mention_custom_tag key="DemoComponent_mention_custom_tag" />;
