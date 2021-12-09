import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Entries from './Entries.jsx';
import Logo from './Logo.jsx';

const Dashboard = () => {
  let userIdFromState = useSelector((state) => state);
  return (
    <div id="page-dashboard">
      <Logo />
      <h3>Dashboard</h3>
      <hr></hr>
      <label>User ID:</label>
      <span>{userIdFromState.userID}</span>
      <br /> <br />
      <Entries />
      <button>
        <Link to="/login">Sign Out</Link>
      </button>
    </div>
  );
};

export default Dashboard;
