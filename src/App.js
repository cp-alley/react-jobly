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
//between refresh and getting token from local storage that we dont have current user in state or usercontext

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);
  const [loadedCurrentUser, setLoadedCurrentUser] = useState(false);


  useEffect(function () {
    async function fetchCurrentUser() {
      console.log("useEffect in App. ", loadedCurrentUser, " =loadedCurrentUser in App")
      JoblyApi.token = token;
      const decoded = jwt_decode(token);
      const userData = await JoblyApi.getUser(decoded.username);
      setCurrentUser(userData);
    }
    if (token !== null) fetchCurrentUser();
    setLoadedCurrentUser(true)
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
    <userContext.Provider value={{ currentUser, loadedCurrentUser }}>
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
