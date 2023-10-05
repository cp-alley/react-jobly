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
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function () {
    async function fetchCurrentUser() {
      JoblyApi.token = token;
      const decoded = jwt_decode(token);
      const userData = await JoblyApi.getUser(decoded.username);
      setCurrentUser(userData);
    }
    if (token !== null) fetchCurrentUser();


  }, [token]);

  async function login(userData) {
    const token = await JoblyApi.loginUser(userData);
    setToken(token);
    localStorage.setItem("token", token);

  }

  async function signUp(userData) {
    const token = await JoblyApi.signUpUser(userData);
    setToken(token);
    localStorage.setItem("token", token);
  }

  function logoutUser() {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
  }

  return (
    <userContext.Provider value={{ currentUser }}>
      <BrowserRouter>
        <Nav logout={logoutUser} />
        <RoutesList signUp={signUp} loginUser={login} />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;


//protected routes:
//check if token in local storage??
//state: has a current user??
