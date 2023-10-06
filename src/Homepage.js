import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";
import "./Homepage.css";

/** Homepage: homepage for Jobly */

function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      {currentUser
        ? <div>Welcome Back, {currentUser.username}</div>
        : <div className="Homepage-button-container">
          <Link className="Homepage-button" to="/login">Log in</Link>
          <Link className="Homepage-button" to="/signup">Sign up</Link>
        </div>
      }
    </div>
  );
}

export default Homepage;