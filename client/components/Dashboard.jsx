import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Entries from './Entries.jsx';
import Logo from './Logo.jsx';

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
      <br/>
      <Link to="/login" className="tertiary-button" onClick={() => handleLogout()}>
      Sign Out
      </Link>
      <br/>
      <Entries />
    </div>
  );
};

export default Dashboard;
