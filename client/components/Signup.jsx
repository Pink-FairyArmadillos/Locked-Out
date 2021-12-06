
// WORK IN PROGRESS, COPIED AND ADAPTED MINORLY FROM LOGIN







import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import PasswordStrengthMeter from './PasswordStrengthMeter.jsx';

const Signup = (props) => {
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
          <h2 style={{marginTop: '3px', marginLeft: '10px'}} >Sign-up</h2>
          <input style={{marginTop: '3px', marginLeft: '10px'}} className="form-group" placeholder="Username" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <p style={{marginLeft: '10px', fontSize: '10px'}}>* User name must be unique</p>

          <br></br>

          <input style={{marginTop: '3px', marginLeft: '10px'}} className="form-group shadow-none" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <p style={{marginLeft: '10px', fontSize: '10px'}}>* Password must be 9 characters, include a number and a special character</p>

          <PasswordStrengthMeter password = {password}/>

          <button style={{marginTop: '3px', marginLeft: '30px', backgroundColor:'blue', color: 'white', borderRadius: '4px'}} onClick={() => handleLogin(username, password)}> Log in</button>
          <button  style={{marginTop: '3px', marginLeft: '10px', borderRadius: '4px'}} onClick={() => handleSignup(username, password)}>Sign up</button>
        </>
      )}

      {userLoggedIn && <Dashboard />}
    </>
  );
};

export default Login;

