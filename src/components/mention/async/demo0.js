import React from 'react';
import { Mention } from 'antd';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class AsyncMention extends React.Component {
  state = {
    suggestions: [],
    loading: false,
  }
  fetchSuggestions = (value, callback) => {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  }
  onSearchChange = (value) => {
    this.fetchSuggestions(value, (suggestions) => {
      this.setState({
        suggestions,
        loading: false,
      });
    });
    this.setState({
      loading: true,
    });
  }
  render() {
    const { suggestions, loading } = this.state;
    return (
      <Mention
        style={{ width: '100%', height: 100 }}
        loading={loading}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

export default function DemoComponent_mention_async() {
return(<AsyncMention />);
};

export const demo = <DemoComponent_mention_async key="DemoComponent_mention_async" />;
