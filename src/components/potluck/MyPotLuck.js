import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getPotluckData,
  getOrganizerPotLuck,
} from "../../store/actions/potluckAction";

import MyPotLuckCard from "./MyPotLuckCard";

import MyPotLuckStyle from "./MyPotLuckStyle";
//      change^               change^

const MyPotLuck = (props) => {
  const { myPotLuckData, userID, getOrganizerPotLuck } = props;

  const addNewPotLuck = () => {
    props.history.push("/add-potluck");
  };
  useEffect(() => {
    getOrganizerPotLuck(userID);
  }, [getOrganizerPotLuck, userID]);

  return (
    <MyPotLuckStyle>
      <button onClick={addNewPotLuck}>Add Potluck</button>
      {myPotLuckData.map((pot) => {
        return <MyPotLuckCard key={pot.potluck_description} potluck={pot} />;
      })}
    </MyPotLuckStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    potluckData: state.potluck.potluckData,
    error: state.potluck.error,
    loadingPotluckData: state.potluck.loadingPotluckData,
    myPotLuckData: state.potluck.myPotLuckData,
    userID: state.login.userData.id,
  };
};

export default connect(mapStateToProps, {
  getOrganizerPotLuck,
  getPotluckData,
})(MyPotLuck);
//              change^^
