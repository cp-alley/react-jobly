import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RoutesList from './RoutesList';
import Nav from './Nav';

/** App: Renders navigation bar and handles routes
 *
 * App -> (CompanyList, JobList, CompanyDetail, Homepage)
 * App -> Nav
 */

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <RoutesList />
    </BrowserRouter>
  );
}

export default App;
