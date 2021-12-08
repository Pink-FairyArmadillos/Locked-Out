import React, { useState } from "react";



const PasswordEntry = (props) => {

    const [passwordState, setPasswordState] = useState(props.value);
    const [passwordType, setPasswordType] = useState('password');
    
    return (
      <>
        <input
          className="form-group shadow-none form-item"
          readOnly="true"
          type={passwordType}
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value)}
        ></input>
        <button
          id="vault-password-reveal-button"
          onClick={() =>
            setPasswordType(passwordType === "password" ? "text" : "password")
          }
        >
          Reveal
        </button>
      </>
    );
};

export default PasswordEntry
