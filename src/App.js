import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import Loading from './Loading';
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
  const [currentUser, setCurrentUser] = useState({ userData: null, isLoaded: false });

  useEffect(function () {
    async function fetchCurrentUser() {
      JoblyApi.token = token;
      const decoded = jwt_decode(token);
      const userData = await JoblyApi.getUser(decoded.username);
      setCurrentUser({ userData: userData, isLoaded: true });
    }
    token !== null
      ? fetchCurrentUser()
      : setCurrentUser({ ...currentUser, isLoaded: true });
  }, [token]);


  async function login(userData) {
    const token = await JoblyApi.loginUser(userData);
    localStorage.setItem("token", token);
    setToken(token);
  }

  async function signUp(userData) {
    const token = await JoblyApi.signUpUser(userData);
    localStorage.setItem("token", token);
    setToken(token);
  }

  function logoutUser() {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser({ userData: null, isLoaded: false });
  }

  if (!currentUser.isLoaded) {
    return <Loading />;
  }

  return (
    <userContext.Provider value={{ currentUser }}>
      <BrowserRouter>
        <Nav logout={logoutUser} />
        <RoutesList currentUser={currentUser} signUp={signUp} loginUser={login} />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;

