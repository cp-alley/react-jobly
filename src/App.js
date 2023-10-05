import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from './userContext';
import jwt_decode from "jwt-decode";

/** App: Renders navigation bar and handles routes
 *
 * State:
 * -token
 * -currentUser
 *
 * App -> (CompanyList, JobList, CompanyDetail, Homepage)
 * App -> Nav
 */

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function () {
    async function fetchCurrentUser() {
      const decoded = jwt_decode(token);
      const userData = await JoblyApi.getUser(decoded.username);
      setCurrentUser(curr => userData);
    }
    if (token !== null) fetchCurrentUser();
  }, [token]);

  async function loginUser(userData) {
    let token = await JoblyApi.loginUser(userData);
    setToken(curr => token);
  }

  async function signUp(userData) {
    let token = await JoblyApi.signUpUser(userData);
    setToken(curr => token);
  }

  function logoutUser() {
    setToken(null);
    setCurrentUser(null);
  }

  return (
    <userContext.Provider value={{ currentUser }}>
      <BrowserRouter>
        <Nav logout={logoutUser} />
        <RoutesList signUp={signUp} loginUser={loginUser} />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
