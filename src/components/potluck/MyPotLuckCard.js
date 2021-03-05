import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import Card from "@material-ui/core/Card";
import { connect } from "react-redux";

function MyPotLuckCard(props) {
  const { potluck, userData } = props;

  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState(potluck);
  const { push } = useHistory();

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      console.log("submit call fired baybeeee");
      setEditing(!editing);

      axiosWithAuth()
        .put("NEED_ENDPOINT_URL", { potluck: values })
        .catch((err) => {
          console.log(err);
        });

      push("/my-potlucks");
    } else {
      console.log("editing in submit call evaluated to false");
    }
    // NOTE TO TEAM - WE NEED THE DATA TO SEND ON THIS CALL.
  };

  const buttonToggle = (event) => {
    setEditing(!editing);
    console.log(potluck);
  };

  const form = (
    <form onSubmit={formSubmit}>
      <li>
        <label>
          {" "}
          Title
          <input
            type="text"
            name="title"
            value={values.potluck_title}
            onChange={changeHandler}
          />
        </label>
      </li>
      <li>
        <label>
          {" "}
          Description
          <input
            type="text"
            name="description"
            value={values.potluck_description}
            onChange={changeHandler}
          />
        </label>
      </li>
      <li>
        <label>
          {" "}
          Date
          <input
            type="text"
            name="date"
            value={values.potluck_date}
            onChange={changeHandler}
          />
        </label>
      </li>
      <li>
        <label>
          {" "}
          Creator
          <input
            type="text"
            name="creator"
            value={userData.username}
            onChange={changeHandler}
          />
        </label>
      </li>
      <li>
        <label>
          {" "}
          Location
          <input
            type="text"
            name="location"
            value={values.potluck_location}
            onChange={changeHandler}
          />
        </label>
        <br />
        <button type="submit" onClick={formSubmit}>
          Submit ze Potluck
        </button>
      </li>
    </form>
  );

  const thisPotluck = (
    <Card>
      {editing ? <input /> : <h1>{potluck.potluck_title}</h1>}
      <p>{potluck.potluck_description}</p>
      <p>{potluck.potluck_date}</p>
      <p>{potluck.potluck_creator}</p>
      <p>{potluck.potluck_location}</p>

      {/* {potluck.guests.map((guest) => {
        return <p>{guest}</p>;
      })} */}
    </Card>
  );

  return (
    <div>
      {editing ? (
        <p>You are currently editing the potluck. </p>
      ) : (
        <button type="submit" onClick={buttonToggle}>
          Edit ze Potluck
        </button>
      )}

      {editing ? form : thisPotluck}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { userData: state.login.userData };
};
export default connect(mapStateToProps)(MyPotLuckCard);
