import React, { Component } from 'react';

// Counter with Arrow Func
export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleReset = () => {
    this.setState({
      count: this.state.count * 0
    })
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state; // object destructuring
    return (
        <div>
          <p>Class Arrow Count: {count}</p>
          <button type="button" disabled={count === 0} onClick={this.handleReset}>Reset</button>
          <button type="button" onClick={this.handleIncrement}>Increment</button>
          <button type="button" onClick={this.handleDecrement}>Decrement</button>
        </div>
    );
  }
}
