import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter.jsx";
import PasswordEntry from "./PasswordEntry.jsx";
import bigReducer from "../reducers/passwordReducer.js";
import {setEntryURL} from "../actions/passwordActions"


const Entries = () => {
  const [entryPassword, setEntryPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const [passwordState, setPasswordState] = useState("password");

  // using redux instead of hooks (like above)
  const dispatch = useDispatch();
  let entryURL = useSelector((state) => state.entryURL);
  let userID = useSelector((state) => state.userID);

  useEffect(() => {
    fetch(`/api/getAllEntries?userID=${userID}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEntries([...data]));
  }, [userID]);

  const handleSaveEntries = () => {
    fetch(
      `/api/addEntry?urlEntry=${entryURL}&userID=${userID}&passwordEntry=${entryPassword}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => setEntries(data));
  };
  const displayEntries = [];
  entries?.map((element, index) => {
    displayEntries.push(
      <div className="vault-entry">
        <h3>{element?.url}</h3>
        Password: <PasswordEntry
          setEntries={setEntries}
          url={element?.url}
          entryID={element?.id}
          value={element?.entry_password} />
      </div>
    );
  });
  return (
    <>
      <label>Url</label>
      <input value={entryURL} onChange={(e) => dispatch(setEntryURL(e.target.value))} />
      <label>Password</label>
      <input
        type={passwordState}
        value={entryPassword}
        onChange={(e) => setEntryPassword(e.target.value)}
      />
      <button onClick={() => handleSaveEntries()}>Save</button>

      <PasswordStrengthMeter password={entryPassword} />

      {entries.length > 0 && (
        <div className="vault-entry-container">
          {displayEntries}
        </div>
      )}
    </>
  );
};

export default Entries;
