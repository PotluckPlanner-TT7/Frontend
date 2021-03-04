import React from "react";
import Card from "@material-ui/core/Card";

function MyPotLuckCard(props) {
  const { potluck } = props;

  return (
    <Card>
      <h1>{potluck.potluck_title}</h1>
      <p>{potluck.potluck_date}</p>
      <p>{potluck.potluck_location}</p>
      <p>{potluck.potluck_description}</p>
    </Card>
  );
}

export default MyPotLuckCard;
