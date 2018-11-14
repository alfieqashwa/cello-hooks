import React, { Component } from 'react';

// Counter w/o Arrow Func
export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleReset() {
    this.setState({
      count: this.state.count * 0
    })
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state;
    return (
        <div>
          <p>Class Count: {count}</p>
          <button type="button" disabled={count === 0} onClick={this.handleReset}>Reset</button>
          <button type="button" onClick={this.handleIncrement}>Increment</button>
          <button type="button" onClick={this.handleDecrement}>Decrement</button>
        </div>
    );
  }
}
