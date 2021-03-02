import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import NavStyle from "./NavStyle";


const Nav = (props) => {
  const token = localStorage.getItem("token");

  //extra safe or stupid to to check both localStorage and redux? If there are bugs, try removing one.
  const NavItems = props.loggedIn && token
    ? [
        <NavLink to="/dashboard">Dashboard</NavLink>,
        <NavLink to="/create-potluck">Create Pockluck</NavLink>,
        <NavLink to="/">Signout</NavLink>,
      ]
    : [
        <NavLink to="/">Home</NavLink>,
        <NavLink to="/sign-up">Sign Up</NavLink>,
        <NavLink to="/login">Login</NavLink>,
        <NavLink to="/potlucks">Potlucks</NavLink>,
      ];

  return <NavStyle>{NavItems}</NavStyle>;
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.login.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Nav);
