// source: https://reactjs.org/docs/handling-events.html
import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.isToggleOn ? 'STABLE-ON' : 'STABLE-OFF' }
      </button>
    );
  }
}
export default Toggle;
