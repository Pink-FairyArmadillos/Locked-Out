import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter.jsx";
import PasswordEntry from "./PasswordEntry.jsx";
import bigReducer from "../reducers/passwordReducer.js";
import {setEntryURL} from "../actions/passwordActions"
import GeneratePassword from './GeneratePassword.jsx';


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
        <div className="vault-entry-inner">
          <h3>{element?.url}</h3>
          Password: <PasswordEntry
            setEntries={setEntries}
            url={element?.url}
            entryID={element?.id}
            value={element?.entry_password} />
        </div>
      </div>
    );
  });
  return (
    <>
      <div id="dashboard-control">
        <div>
          <div className="dashboard-control-inputs">
            <div className="dashboard-control-inputs">
              <label>Url</label>
              <input value={entryURL} onChange={(e) => dispatch(setEntryURL(e.target.value))} />
            </div>
            <div className="dashboard-control-inputs">
              <label>Password</label>
              <input
                type={passwordState}
                value={entryPassword}
                onChange={(e) => setEntryPassword(e.target.value)}
              />
            </div>
            <div>
              <PasswordStrengthMeter password={entryPassword} />
            </div>
          </div>
          <button className="secondary-button" onClick={() => handleSaveEntries()}>Create entry</button>
        </div>

        <GeneratePassword />
      </div>

      {entries.length > 0 && (
        <div className="vault-entry-container">
          {displayEntries}
        </div>
      )}
    </>
  );
};

export default Entries;
