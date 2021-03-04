import React from "react";
// import { connect } from "react-redux";
import AddForm from "./AddForm";
import AddStyles from "./AddStyles";

const Add = (props) => {
  return (
    <AddStyles>
      <AddForm />
    </AddStyles>
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
