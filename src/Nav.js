import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";
import "./Nav.css";

/** Nav
 *
 * Nav -> NavLink
 */
function Nav() {
  const { currentUser } = useContext(userContext);

  return (
    <nav className="Nav-navbar">
      <NavLink className="Nav-navlink" to="/">Jobly</NavLink>
      {!currentUser
        ? <>
          <NavLink className="Nav-navlink" to="/signup">SignUp</NavLink>
          <NavLink className="Nav-navlink" to="/login">Login</NavLink></>
        : <>
          <NavLink className="Nav-navlink" to="/companies">Companies</NavLink>
          <NavLink className="Nav-navlink" to="/jobs">Jobs</NavLink>
          <NavLink className="Nav-navlink" to="/profile">Profile</NavLink>
          <NavLink className="Nav-navlink" to="/logout">Logout {currentUser.username}</NavLink>

        </>
      }
    </nav>
  );
}

export default Nav;