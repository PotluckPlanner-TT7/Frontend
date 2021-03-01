import React from "react";
import { connect } from "react-redux";
import {
  startLogin,
  startSuccess,
  startFail,
} from "../../store/actions/loginActions";

import PotLuckCard from "./PotLuckCard";

import PotLuckStyle from "./PotLuckStyle";
//      change^               change^

const PotLuck = (props) => {
  console.log(props);
  return (
    <PotLuckStyle>
      test from Component.js
      {/* {props.potlucks.map((pot) => {
        <PotLuckCard key={pot.id} potluck={pot} />;
      })} */}
    </PotLuckStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    potluckData: state.potluck.potluckData,
    error: state.potluck.error,
    loadingPotluckData: state.potluck.loadingPotluckData,
  };
};

export default connect(mapStateToProps, {
  // getPotluckData,
})(PotLuck);
//              change^^
