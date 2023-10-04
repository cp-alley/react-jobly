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
  const [user, setUser] = useState(null)

  async function loginUser() {
    let token = await JoblyApi.loginUser()
    setUser(curr => token)
  }

  return (
    <BrowserRouter>
      <Nav />
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
