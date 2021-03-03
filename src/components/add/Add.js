import React from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm"
// import { startLogin, startSuccess, startFail } from '../../store/actions/loginActions';

import AddStyles from "./AddStyles";
//      change^               change^

const Add = (props) => {
  console.log(props);
  //   change^^
  return (
    <AddStyles>
      {/* change^^ */}
      <AddForm />
    </AddStyles>
    // change^^
  );
};

export default Add;

// const mapStateToProps = (state) => {
//   return {
//     userData: state.login.userData,
//     error: state.login.error,
//     loadingData: state.login.loadingData
//   }
// }

// export default connect(mapStateToProps, {startLogin, startSuccess, startFail})(Component);
//              change^^
