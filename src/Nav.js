import React from "react";
import { NavLink } from "react-router-dom";

/** Nav
 *
 * Nav -> NavLink
 */
function Nav() {
  return (
    <nav>
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Nav;