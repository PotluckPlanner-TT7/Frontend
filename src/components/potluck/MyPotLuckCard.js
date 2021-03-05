import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { updatePotluckData } from "../../store/actions/potluckAction";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";

function MyPotLuckCard(props) {
  const { potluck, userData } = props;
  console.log(props);

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
    props.banana(values);
    console.log(potluck.id);

    axiosWithAuth()
      .put(
        `https://potluckapi.herokuapp.com/api/potluck/${potluck.potluck_id}`,
        {
          potluck: values,
        }
      )
      .then((res) => {
        console.log(res);
        updatePotluckData(res.data);
        setEditing(!editing);
      })
      .catch((err) => {
        console.log(err);
      });

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
  return {
    singleState: { ...state },
    userData: state.login.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    banana: (potluck) => {
      dispatch(updatePotluckData(potluck));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyPotLuckCard);
