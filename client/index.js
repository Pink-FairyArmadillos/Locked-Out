<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import MainContainer from "../client/components/MainContainer.jsx";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/main" element={<MainContainer />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
>>>>>>> e4fed64bb818c5d050ae11f481d718ebd39140c7
