import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
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
      <Routes>
        <Route path="/companies" element={<CompanyList />}></Route>
        <Route path="/jobs" element={<JobList />}></Route>
        <Route path="/companies/:id" element={<CompanyDetail />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
