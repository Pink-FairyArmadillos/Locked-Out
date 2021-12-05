import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

ReactDOM.render(<BrowserRouter>
    <Routes>
      <Route path = "/" element={ <App />}></Route>
      <Route path = "/dashboard" element={ <Dashboard />}></Route>
      <Route path = "/login" element={ <Login />}></Route>
    </Routes>
    
     </BrowserRouter>, document.getElementById('root'));