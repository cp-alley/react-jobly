import React from "react";
import { Link } from "react-router-dom";

/** Homepage: homepage for Jobly */

function Homepage({ currentUser }) {
  return (
    <>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      {currentUser
        ? <>
          <div>Welcome Back, {currentUser.username}</div></>
        : <>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </>
      }

    </>
  );
}

export default Homepage;