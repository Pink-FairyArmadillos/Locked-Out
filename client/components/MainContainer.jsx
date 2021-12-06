import React from "react";
import Login from "../components/Login.jsx";

const MainContainer = () => {
  return (
    <>
        <img src="./build/pinkFairyArmidallo.png" alt="Badass Armored PFA"/> // not appearing?
      <h2 className="text-center my-5">Pink Fairy Armidallo Password Manager</h2>
      <hr></hr>
      <Login />
    </>
  );
};
export default MainContainer;
