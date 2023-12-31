import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import userContext from "./userContext";
import "./Nav.css";

/** Nav
 *
 * Props:
 * -logout
 *
 * Nav -> NavLink
 */
function Nav({ logout }) {
  const { currentUser } = useContext(userContext);

  return (
    <nav className="Nav-navbar">
      <NavLink className="Nav-navlink" to="/">Jobly</NavLink>
      {!currentUser.userData
        ? <>
          <NavLink className="Nav-navlink" to="/signup">SignUp</NavLink>
          <NavLink className="Nav-navlink" to="/login">Login</NavLink></>
        : <>
          <NavLink className="Nav-navlink" to="/companies">Companies</NavLink>
          <NavLink className="Nav-navlink" to="/jobs">Jobs</NavLink>
          <NavLink className="Nav-navlink" to="/profile">Profile</NavLink>
          <Link
            className="Nav-navlink"
            to="/"
            onClick={logout}>Logout {currentUser.userData.username}
          </Link>
        </>
      }
    </nav>
  );
}

export default Nav;