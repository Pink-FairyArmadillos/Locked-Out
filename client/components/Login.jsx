import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log('userLoggedIn in App', userLoggedIn);
  }, [userLoggedIn]);

  const handleSignup = () => {
    fetch(`/api/signup?username=${username}&passwordUser=${password}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUserLoggedIn(data.userExists));
  };

  const handleLogin = (username, password) => {
    fetch(`/api/login?username=${username}&passwordUser=${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUserLoggedIn(data.userExists));
  };

  return (
    <>
      {!userLoggedIn && (
        <>
          <h2>Please Login</h2>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            onChange={(bananas) => setUsername(bananas.target.value)}
          ></input>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
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

//   setUsername(e.target.value);
// }

// function onChangePassword(e) {
//   // setState(prevState => {
//   //     return {...prevState, password: e.target.value}
//   // })
//   setPassword(e.target.value);
// }

// function signUp(username, password) {
//   fetch(`/api/login?username=${username})&userPassword=${password}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log('data: ', data));
// }

// function submitLogin(username, password) {
//   console.log('submitLogin', username, password);
//   fetch(`/api/login?username=${username}&passwordUser=${password}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => setUserLoggedIn(data));
// }
