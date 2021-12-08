import React, { useState } from "react";



const PasswordEntry = (props) => {

    const [passwordState, setPasswordState] = useState(props.value);
    const [passwordType, setPasswordType] = useState('password');
    
    return (
      <div>
        <input
          style={{ marginTop: "3px", marginLeft: "10px" }}
          className="form-group shadow-none"
          readOnly="true"
          type={passwordType}
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value)}
        ></input>
        <button
          style={{
            borderRadius: "18px",
            height: "20px",
            width: "50px",
            fontSize: "10px",
          }}
          onClick={() =>
            setPasswordType(passwordType === "password" ? "text" : "password")
          }
        >
          Reveal
        </button>
      </div>
    );
};

export default PasswordEntry