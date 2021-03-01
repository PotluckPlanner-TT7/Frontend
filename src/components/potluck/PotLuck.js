import React from "react";
import { connect } from "react-redux";
import {
getPotluckData
} from "../../store/actions/potluckAction";

import PotLuckCard from "./PotLuckCard";

import PotLuckStyle from "./PotLuckStyle";
//      change^               change^

const PotLuck = (props) => {
  const { potluckData } = props;
  return (
    <PotLuckStyle>

      {potluckData.map((pot) => {
        return <PotLuckCard key={pot.id} potluck={pot} />;
      })} 
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
  getPotluckData,
})(PotLuck);
//              change^^
