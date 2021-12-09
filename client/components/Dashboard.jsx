import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Entries from './Entries.jsx';
import Logo from './Logo.jsx';
import GeneratePassword from './GeneratePassword.jsx';

const Dashboard = (props) => {
  let userIdFromState = useSelector((state) => state);

  function handleLogout (){
    props.isLoggedIn(false);
    props.clearUsername("");
    props.clearPassword("");
  }

  return (
    <div id="page-dashboard">
      <Logo />
      <Link to="/login" className="secondary-button" onClick={() => handleLogout()}>
      Sign Out
      </Link>
      <Entries />
      <GeneratePassword />
    </div>
  );
};

export default Dashboard;
