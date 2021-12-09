import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Entries from './Entries.jsx';
import Logo from './Logo.jsx';
import GeneratePassword from './GeneratePassword.jsx';

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
        <Link to="/login">Sign out</Link>
      </button>
      <GeneratePassword />
    </div>
  );
};

export default Dashboard;
