import React, { useState } from "react";
import { useSelector } from "react-redux";


const PasswordEntry = (props) => {

  const [passwordState, setPasswordState] = useState(props.value);
  const [entryID, setEntryIDState] = useState(props.entryID); // need new props
  const [urlEntry, setURLState] = useState(props.url); // need new props
  const [passwordType, setPasswordType] = useState('password');
  const [readOnlyType, setReadOnlyType] = useState(true);
  
  let userID = useSelector((state) => state.userID);

  function editEntry() {
    if (readOnlyType){
      setReadOnlyType(false);
    } else {
      setReadOnlyType(true);
      console.log(JSON.stringify({
        urlEntry,
        userID,
        entryID,
        passwordEntry: passwordState
      }));
      fetch('/api/updateEntry', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          urlEntry,
          userID,
          entryID,
          passwordEntry: passwordState
        })
      })
        .then((response) => response.json())
        // .then((data) => props.setEntries(data))
        .catch((err) => console.log(err));
    }
  }

  function deleteEntry(){
    console.log('delete was clicked');
    console.log(entryID)
    fetch('/api/deleteEntry', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userID, entryID})
    })
    .then(response => response.json())
    .then((data) => props.setEntries(data))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <input
        className="form-group shadow-none form-item"
        readOnly={readOnlyType}
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
        👁
      </button>
      <button
        id="update-entry"
        onClick={() => {
          editEntry();
        }}
      >
        {readOnlyType ? "Edit✎" : "Save"}
      </button>
      <button
        id="delete-entry"
        onClick={() => {
          deleteEntry();
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default PasswordEntry
