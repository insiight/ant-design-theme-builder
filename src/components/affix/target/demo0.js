import React from 'react';
import { Affix, Button } from 'antd';

class Demo extends React.Component {
  render() {
    return (
      <div className="scrollable-container" ref={(node) => { this.container = node; }}>
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">
              Fixed at the top of container
            </Button>
          </Affix>
        </div>
      </div>
    );
  }
}

export default function DemoComponent_affix_target() {
return(<Demo />);
};

export const demo = <DemoComponent_affix_target key="DemoComponent_affix_target" />;
