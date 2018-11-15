import React, { Component } from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <h1 style={{color: 'red'}}>Warning!</h1>
  );
}

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
