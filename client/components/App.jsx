import React, { useState, useEffect } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx'
import {Link} from 'react-router-dom' 

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [shouldRenderLoggedInComponent, setShouldRenderLoggedInComponent] =
    useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signedup, setSignedUp] = useState(false);
  


  return (
    <>
    <div>
        <h2 className="text-center my-5">Pink Fairy Armidallo Password Manager</h2>
        <img src="../assets/Mmxarmoredarmadillo.jpg" alt="Badass Armored Pink Fairy Armidallo"></img> // not appearing??
        <hr></hr>
    </div>

     <Login setUserLoggedIn = {setUserLoggedIn}/>
     
    </>

  )
}

export default App;
