import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
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
    fetch(`/api/login`, {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password
      })
    })
    // fetch(`/api/login?username=${username}&passwordUser=${password}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
      .then((response) => response.json())
      .then((data) => handleUserFetch(data));
  };

  return (
    <>
      {!userLoggedIn && (
        <>
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

          <br></br>

          <input
            className="form-group shadow-none form-item"
            placeholder="Password"
            type={passwordState}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            id="master-password-reveal-button"
            onClick={() => setPasswordState(passwordState === "password"?"text": "password")}>Reveal</button>

          <PasswordStrengthMeter password={password} />

          <button
            id="login-button"
            onClick={() => handleLogin(username, password)}
          >
            {" "}
            Log in
          </button>
          <button id="signup-button">
            {/* onClick={() => handleSignup(username, password)} */}
            <Link to="/signup">Sign Up</Link>
          </button>
        </>
      )}
      {userLoggedIn && <Dashboard />}
    </>
  );
};

export default Login;
