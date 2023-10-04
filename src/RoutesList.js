import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';

function RoutesList() {
  return (
    <Routes>
      <Route path="/companies" element={<CompanyList />}></Route>
      <Route path="/jobs" element={<JobList />}></Route>
      <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>);
}

export default RoutesList