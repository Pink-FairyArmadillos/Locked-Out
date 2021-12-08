import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles.scss";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter.jsx";
import PasswordEntry from "./PasswordEntry.jsx";


const Entries = () => {
  const [entryUserName, setEntryUserName] = useState("");
  const [entryURL, setEntryURL] = useState("");
  const [entryPassword, setEntryPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const [passwordState, setPasswordState] = useState("password");
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
      `/api/addEntry?urlEntry=${entryURL}&userName=${entryUserName}&userID=${userID}&passwordEntry=${entryPassword}`,
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
      <tr className="tableCell">
        <td className="tableCell">{element?.url}</td>
        <td className="tableCell">{element?.entry_username}</td>
        {/* <td className="tableCell">{element?.entry_password}</td> */}
        <td className="tableCell"><PasswordEntry value={element?.entry_password}/></td>
      </tr>
    );
  });
  return (
    // from lines 45-56, create new entries field
    <> 
      <form>
        <label>Url
          <input 
            value={entryURL} 
            onChange={(e) => setEntryURL(e.target.value)} 
            required/>
        </label>
        <label>Username
          <input 
            value={entryUserName} 
            onChange={(e) => setEntryUserName(e.target.value)} 
            required/>
        </label>
        <label>Password
          <input
            type={passwordState}
            value={entryPassword}
            onChange={(e) => setEntryPassword(e.target.value)} 
            required/>
        </label>
        <button onClick={(event) => {
          event.preventDefault();
          handleSaveEntries()
          }}>Save</button>
      </form>

      
      

      <PasswordStrengthMeter password={entryPassword} />

      {/* <button
        style={{
          borderRadius: "18px",
          height: "20px",
          width: "50px",
          fontSize: "10px",
        }}
        onClick={() =>
          setPasswordState(passwordState === "password" ? "text" : "password")
        }
      >
        Reveal
      </button> */}

      {entries.length > 0 && (
        <table>
          <tr className="tableCell">
            <td className="tableCell">URL</td>
            <td className="tableCell">Passwords</td>
            
          </tr>

          {displayEntries}
        </table>
      )}
    </>
  );
};

export default Entries;
