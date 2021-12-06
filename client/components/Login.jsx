import React, { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import store from '../store';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleSignup = () => {
    fetch(`/api/signup?username=${username}&passwordUser=${password}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUserLoggedIn(data.userExists))
  };

  const handleUserFetch = (data) => {
    setUserLoggedIn(data.userExists)
    store.dispatch({
      type: "ADD_USER_ID",
      payload: data.userID
    })
  }

  const handleLogin = (username, password) => {
    fetch(`/api/login?username=${username}&passwordUser=${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => handleUserFetch(data))
  };

  return (
    <>
      {!userLoggedIn && (
        <>
          <h2>Please Login/Sign up</h2>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(bananas) => setUsername(bananas.target.value)}
          />
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => handleLogin(username, password)}>
            Log in
          </button>
          <button onClick={() => handleSignup(username, password)}>
            Sign up
          </button>
        </>
      )}
      {userLoggedIn && <Dashboard />}
    </>
  );
};

export default Login;
