import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exactS
      >
        Movies
      </NavLink>
      <NavLink
        to="/actors"
      >
        Actors
      </NavLink>
      <NavLink
      to="/directors"
      exact
      >
        Directors
      </NavLink>
    </div>
  );
}
export default NavBar;
