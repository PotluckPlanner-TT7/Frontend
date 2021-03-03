import React from "react";

function MyPotLuckCard(props) {
  const {potluck} = props;

  return (
    <div>
      <ul>
        <li>{potluck.title}</li>
        <li>{potluck.description}</li>
        <li>{potluck.date}</li>
        <li>{potluck.creator}</li>
        <li>{potluck.location}</li>
        <ul>
          {potluck.guests.map(guest => {
            return (<li>{guest}</li>)
          })}
        </ul>
      </ul>
    </div>
  );
}

export default MyPotLuckCard;
