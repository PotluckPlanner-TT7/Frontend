import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getPotluckData,
  getOrganizerPotLuck,
} from "../../store/actions/potluckAction";

import MyPotLuckCard from "./MyPotLuckCard";
import MyPotLuckStyle from "./MyPotLuckStyle";
// import "./MyPotLuckStyle.css";
import Button from "@material-ui/core/Button";

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
      <Button
        onClick={addNewPotLuck}
        color="secondary"
        variant="contained"
        type="submit"
      >
        Add Potluck
      </Button>
      {myPotLuckData.map((pot) => {
        return <MyPotLuckCard key={pot.potluck_title} potluck={pot} />;
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
