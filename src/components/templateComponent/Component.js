import React from 'react';
import { connect } from "react-redux";
import { startLogin, startSuccess, startFail } from '../../store/actions/loginActions';

import StyledComponent from './StyledComponent';
//      change^               change^

const Component = (props) => {
  console.log(props);
  //   change^^
  return(
    <StyledComponent>
      {/* change^^ */}
      test from Component.js
    </StyledComponent>
    // change^^
  )
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    error: state.login.error,
    loadingData: state.login.loadingData
  }
}

export default connect(mapStateToProps, {startLogin, startSuccess, startFail})(Component);
//              change^^
