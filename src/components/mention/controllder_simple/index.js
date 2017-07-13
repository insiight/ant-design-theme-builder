import React from 'react';
import { Mention } from 'antd';
const { toContentState } = Mention;

class App extends React.Component {
  state = {
    value: toContentState('@afc163'),
  }
  componentDidMount() {
    this.mention.focus();
  }
  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  }
  render() {
    return (
      <Mention
        ref={ele => this.mention = ele}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default function DemoComponent_mention_controllder_simple() {
return(<App />);
};

export const demo = <DemoComponent_mention_controllder_simple key="DemoComponent_mention_controllder_simple" />;
