import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/** Nav
 *
 * Nav -> NavLink
 */
function Nav() {
  return (
    <nav className="Nav-navbar">
      <NavLink className="Nav-navlink" to="/">Jobly</NavLink>
      <NavLink className="Nav-navlink" to="/companies">Companies</NavLink>
      <NavLink className="Nav-navlink" to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Nav;