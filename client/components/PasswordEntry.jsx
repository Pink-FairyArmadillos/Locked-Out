import React, { useState } from "react";



const PasswordEntry = (props) => {

    const [passwordState, setPasswordState] = useState(props.value);
    const [passwordType, setPasswordType] = useState('password');
    
    const handleDeleteEntries = () => {
      fetch(
        `/api/deleteEntry?urlEntry=${props.entryURL}&userName=${props.entryUserName}&userID=${props.userID}&passwordEntry=${props.entryPassword}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => props.setEntries(data));
    };
    
    return (
      <>
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
        <button
          style={{
            borderRadius: "18px",
            height: "20px",
            width: "50px",
            fontSize: "10px",
          }}
          onClick={() =>
            handleDeleteEntries()
          }
        >
          Delete
        </button>
      </>
    );
};

export default PasswordEntry