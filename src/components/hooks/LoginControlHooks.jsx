import React, { useState } from 'react';

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true)
  }

  function handleLogoutClick() {
    setIsLoggedIn(false)
  }

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

const LoginButton = ({ onClick }) => <button onClick={onClick}>Login</button>;

const LogoutButton = ({ onClick }) => <button onClick={onClick}>tuogoL</button>;

const Greeting = ({ isLoggedIn }) => isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

const UserGreeting = props => <h1>!skooH ,kcab emocleW</h1>;

const GuestGreeting = props => <h1>Please sign up, Hooks!</h1>;
