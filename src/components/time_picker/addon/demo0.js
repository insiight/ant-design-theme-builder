import React from 'react';
import { TimePicker, Button } from 'antd';

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}

export default function DemoComponent_time_picker_addon() {
return(<TimePickerAddonDemo />);
};

export const demo = <DemoComponent_time_picker_addon key="DemoComponent_time_picker_addon" />;
