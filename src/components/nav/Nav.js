import React from "react";
import { NavLink } from "react-router-dom";

import NavStyle from "./NavStyle";

const Nav = (props) => {
  return (
    <NavStyle>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/potlucks">Potlucks</NavLink>
      <NavLink to="/home">Home</NavLink>
    </NavStyle>
  );
};

export default Nav;
