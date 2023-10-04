import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';
import JoblyApi from './api';

/** App: Renders navigation bar and handles routes
 *
 * App -> (CompanyList, JobList, CompanyDetail, Homepage)
 * App -> Nav
 */

function App() {
  const [token, setToken] = useState(null)

  async function loginUser(userData) {
    let token = await JoblyApi.loginUser(userData)
    setToken(curr => token)
  }

  async function signUp(userData){

    let token = await JoblyApi.signUpUser(userData)
    setToken(curr => token)
  }

  //logout

  return (
    <BrowserRouter>
      <Nav />
      <RoutesList signUp={signUp} loginUser={loginUser}/>
    </BrowserRouter>
  );
}

export default App;
