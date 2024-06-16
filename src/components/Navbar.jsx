import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/pokemones" activeClassName="active">
        Pokemones
      </NavLink>
    </nav>
  );
};

export default Navbar;
