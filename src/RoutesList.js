import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** Routes for JoblyApp
 *
 * Props
 * -loginUser
 * -signUp
 */

function RoutesList({ loginUser, signUp, alert }) {
  return (
    <Routes>
      <Route path="/companies" element={<CompanyList />}></Route>
      <Route path="/jobs" element={<JobList />}></Route>
      <Route path="/companies/:handle" element={<CompanyDetail />}></Route>
      <Route path="/login" element={<LoginForm loginUser={loginUser} alert={alert} />}></Route>
      <Route path="/signup" element={<SignUpForm signUp={signUp} alert={alert} />}></Route>
      <Route path="/profile" element={<ProfileForm alert={alert} />}></Route>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>);
}

export default RoutesList;