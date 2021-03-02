import React, { useEffect } from "react";
import { connect } from "react-redux";

import HomeStyle from "./HomeStyle";
import { getPotluckData } from "./../../store/actions/potluckAction";

const Home = (props) => {
  const { userData, getPotluckData, potluckData } = props;
  useEffect(() => {
    getPotluckData();
  }, [getPotluckData]);
  return (
    <HomeStyle>
      <h1>Welcome {userData.username}</h1>
      {/* all potlucks */}
      {potluckData.map((pot) => {
        return <h1 key={pot.potluck_id}>{pot.potluck_title}</h1>;
      })}
    </HomeStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    error: state.login.error,
    loadingData: state.login.loadingData,
    potluckData: state.potluck.potluckData,
  };
};

export default connect(mapStateToProps, { getPotluckData })(Home);
