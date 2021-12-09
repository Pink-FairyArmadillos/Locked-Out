import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Logo from "./Logo.jsx";
import store from "../store";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [passwordState, setPasswordState] = useState('password');

  const handleUserFetch = (data) => {
    setUserLoggedIn(data.userExists);
    store.dispatch({
      type: "ADD_USER_ID",
      payload: data.userID,
    });
  };

  const handleLogin = (username, password) => {
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        passwordUser: password,
      })
    })
      .then((response) => response.json())
      .then((data) => handleUserFetch(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!userLoggedIn && (
        <div id="page-login">
          <Logo />
          <div className="center-content">
            <img
              id="logo-image"
              src="pinkFairyArmidallo.png"
              alt="Badass Armored PFA"
            />
            <h2 className="form-item">Login</h2>
            <input
              className="form-group form-item"
              placeholder="Username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <div className="user-password-input">
              <input
                className="form-group shadow-none form-item user-password-input"
                placeholder="Password"
                type={passwordState}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button
                className="user-reveal-button"
                onClick={() => setPasswordState(passwordState === "password"?"text": "password")}>👁</button>
            </div>


            <div className="user-buttons">
              <button
                className="secondary-button"
                onClick={() => handleLogin(username, password)}
              >
                {" "}
                Log in
              </button>
                {/* onClick={() => handleSignup(username, password)} */}
              <Link to="/signup" className="primary-button">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
      {userLoggedIn && <Dashboard />}
    </>
  );
};

export default Login;
