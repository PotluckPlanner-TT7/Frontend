import React from "react";
import { connect } from "react-redux";
import {
getPotluckData
} from "../../store/actions/potluckAction";

import MyPotLuckCard from "./MyPotLuckCard";

import MyPotLuckStyle from "./MyPotLuckStyle";
//      change^               change^

const MyPotLuck = (props) => {
  const { myPotLuckData } = props;

  const addNewPotLuck = () => {
    props.history.push("/add-potluck")
  }

  return (
    <MyPotLuckStyle>
      <button onClick={addNewPotLuck}>Add Potluck</button>
      {myPotLuckData.map((pot) => {
        return <MyPotLuckCard key={pot.id} potluck={pot} />;
      })} 
    </MyPotLuckStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    potluckData: state.potluck.potluckData,
    error: state.potluck.error,
    loadingPotluckData: state.potluck.loadingPotluckData,
    myPotLuckData: state.potluck.myPotLuckData
  };
};

export default connect(mapStateToProps, {
  getPotluckData,
})(MyPotLuck);
//              change^^
