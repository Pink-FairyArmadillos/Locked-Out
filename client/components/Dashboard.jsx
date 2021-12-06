import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  let userIdFromState = useSelector((state) => state);
  return (
    <div>
      <h3>Dashboard</h3>
      <hr></hr>
      <label>Current User ID:</label>
      <span>{userIdFromState.userID}</span>
      <br /> <br />
      <button>
        <Link to="/login">Sign out</Link>
      </button>
    </div>
  );
};

export default Dashboard;
