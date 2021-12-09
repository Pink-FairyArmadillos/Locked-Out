import React, { useState, useEffect } from 'react';
import { link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import store from '../store';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter.jsx';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [passwordState, setPasswordState] = useState('password');
  const [confirmPasswordState, setConfirmPasswordState] =
    useState('password');

  const handleSignUp = (username, password, confirmPassword) => {
    if (confirmPassword === password) {
      console.log("u,p"+username,password);
      const validated = JSON.stringify({
        username,
        passwordUser: password,
      });
      console.log(validated);
      fetch(`/api/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: validated
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      alert('Passwords do not match');
    }
  };

  return (
    <>
      <img
        id='logo-image'
        src='pinkFairyArmidallo.png'
        alt='Badass Armored PFA'
      />
      <h2 className='form-item'>Sign Up</h2>
      <input
        className='form-group form-item'
        placeholder='Username'
        name='username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}></input>

      <br></br>

      <input
        className='form-group shadow-none form-item'
        placeholder='Password'
        type={passwordState}
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>

      <button
        id='signup-password-reveal-button'
        onClick={() =>
          setPasswordState(passwordState === 'password' ? 'text' : 'password')
        }>
        Reveal
      </button>

      <br></br>

      <input
        className='form-group shadow-none form-item'
        placeholder='Confirm Password'
        type={confirmPasswordState}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}></input>

      <button
        id='signup-confirmPassword-reveal-button'
        onClick={() =>
          setConfirmPasswordState(
            confirmPasswordState === 'password'
              ? 'text'
              : 'password'
          )
        }>
        Reveal
      </button>

      <PasswordStrengthMeter password={password} />

      {/* <button
            id='login-button'
            onClick={() => handleLogin(username, password)}>
            {' '}
            Log in
          </button> */}
      <button
        id='signup-button'
        onClick={() => handleSignUp(username, password, confirmPassword)}>
        Sign up
      </button>
    </>
  );
};

export default SignUp;
