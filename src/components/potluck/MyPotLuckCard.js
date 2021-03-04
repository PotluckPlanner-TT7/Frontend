import React from "react";

function MyPotLuckCard(props) {
  const { potluck } = props;

  return (
    <div>
      <ul>
        <li>{potluck.potluck_title}</li>
        <li>{potluck.potluck_date}</li>
        <li>{potluck.potluck_location}</li>
        <li>{potluck.potluck_description}</li>
      </ul>
    </div>
  );
}

export default MyPotLuckCard;
