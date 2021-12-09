import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Logo from './Logo.jsx';
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

  const clearFields = () => {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  }
  
  const handleSignUp = (username, password, confirmPassword) => {

    if (!username || !password || !confirmPassword) {
      clearFields();
      alert('Please fill out all text fields');
    }
    else if (confirmPassword === password) {
      console.log("u,p" + username, password);
      const validated = JSON.stringify({
        username,
        passwordUser: password,
      });
      console.log(validated);
      fetch(`/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: validated
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => {
          alert('Username already in use!');
          console.log(err)
        });
    } else {
      clearFields();
      alert('Passwords do not match');
    }
  };

  return (
    <div id="page-signup">
      <Logo />
      <div className="center-content">
        <input
          className='form-group form-item'
          placeholder='Username'
          name='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>

        <div className="user-password-input">
          <input
            className='form-group shadow-none form-item'
            placeholder='Password'
            type={passwordState}
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>

          <button
            className='user-reveal-button'
            onClick={() =>
              setPasswordState(passwordState === 'password' ? 'text' : 'password')
            }>
            👁
          </button>
        </div>

        <div className="user-password-input">
          <input
            className='form-group shadow-none form-item'
            placeholder='Confirm Password'
            type={confirmPasswordState}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}></input>

          <button
            className='user-reveal-button'
            onClick={() =>
              setConfirmPasswordState(
                confirmPasswordState === 'password'
                  ? 'text'
                  : 'password'
              )
            }>
            👁
          </button>
        </div>

        <PasswordStrengthMeter password={password} />

        <div className="user-buttons">
          <button
            className="primary-button"
            onClick={() => handleSignUp(username, password, confirmPassword)}>
            Create Account
          </button>
          <Link to="/login" className="primary-button">Login Instead</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
