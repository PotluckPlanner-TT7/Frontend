import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../store/actions/loginActions";

import NavStyle from "./NavStyle";

const Nav = (props) => {
  const signoutHandler = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData"); //remove any user data we store in localStorage to persist through refreshing
    localStorage.removeItem("potluckData");
    props.signout();
  };

  const token = localStorage.getItem("token");

  const NavItems = token ? (
    <NavStyle>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/my-potlucks">My Potlucks</NavLink>
      <NavLink to="/login" onClick={signoutHandler}>
        Signout
      </NavLink>
    </NavStyle>
  ) : (
    <NavStyle>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </NavStyle>
  );

  return NavItems;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
