import React, { Component } from 'react';

export default class LoginControlArrow extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const { isLoggedIn } = this.state; // obj destructuring
    let button;

    // Ternary condition
    isLoggedIn
      ? button = <LogoutButton onClick={this.handleLogoutClick} />
      : button = <LoginButton onClick={this.handleLoginClick} />

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const LoginButton = props =>
  <button onClick={props.onClick}>
    Login
  </button>

const LogoutButton = ({ onClick }) => <button onClick={onClick}>Logout</button>;

const Greeting = ({ isLoggedIn }) => isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

const UserGreeting = props => <h1>Welcome back, bro!</h1>;

const GuestGreeting = props => <h1>Please sign up, boi!</h1>;
