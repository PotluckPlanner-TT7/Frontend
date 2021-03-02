import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../store/actions/loginActions";

import NavStyle from "./NavStyle";

const Nav = ({signout, dispatch}) => {

  const signoutHandler = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData"); //remove any user data we store in localStorage to persist through refreshing
    dispatch(signout());
  };

  const token = localStorage.getItem("token");

  const NavItems = token ? (
    <NavStyle>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/create-potluck">Create Pockluck</NavLink>
      <NavLink to="/" onClick={signoutHandler}>
        Signout
      </NavLink>
    </NavStyle>
  ) : (
    <NavStyle>
      <NavLink to="/">Home</NavLink>,<NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/potlucks">Potlucks</NavLink>
    </NavStyle>
  );

  return NavItems;
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout, dispatch
  };
};

export default connect(null, mapDispatchToProps)(Nav);
