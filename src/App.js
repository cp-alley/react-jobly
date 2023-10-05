import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';
import userContext from './userContext';

/** App: Renders navigation bar and handles routes
 *
 * App -> (CompanyList, JobList, CompanyDetail, Homepage)
 * App -> Nav
 */

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(function () {
  //   async function fetchCurrentUser() {
  //     const userData = await JoblyApi.getUser("testtest");
  //     setCurrentUser(curr => userData)
  //   }
  //   fetchCurrentUser();
  // }, [token]);

  async function loginUser(userData) {
    let token = await JoblyApi.loginUser(userData);
    setToken(curr => token);
  }

  async function signUp(userData) {

    let token = await JoblyApi.signUpUser(userData);
    setToken(curr => token);
  }

  //logout

  return (
    <userContext.Provider value={{currentUser}}>
      <BrowserRouter>
        <Nav />
        <RoutesList signUp={signUp} loginUser={loginUser} />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
