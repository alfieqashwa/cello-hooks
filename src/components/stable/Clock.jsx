import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
   this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;
    return <FormattedDate date={date} />;
  }
}

const FormattedDate = ({ date }) => 
  <div>
    <h2>Cello React Stable!</h2>
    <h3>It is {date.toLocaleTimeString()} now.</h3>
  </div>
