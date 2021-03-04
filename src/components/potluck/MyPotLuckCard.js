import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

function MyPotLuckCard(props) {
  const {potluck} = props;

  const [ editing, setEditing ] = useState(false)
  const [ values, setValues ] = useState(potluck)
  const { push } = useHistory()

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const formSubmit = (event) => {
    event.preventDefault();

    if(editing){
      console.log("submit call fired baybeeee")
      setEditing(!editing)

      axiosWithAuth()
      .put("NEED_ENDPOINT_URL", {potluck: values})
      .catch(err => {
        console.log(err)
      });

      push("/my-potlucks")
      


    } else {
      console.log("editing in submit call evaluated to false")
    }
    // NOTE TO TEAM - WE NEED THE DATA TO SEND ON THIS CALL.
  };

  const buttonToggle = (event) => {
    setEditing(!editing)
    console.log(potluck)

  }

  const form = 
  <form onSubmit={formSubmit}>
      <li><label> Title
        <input
        type="text"
        name="title"
        value={values.title}
        onChange={changeHandler}
         />
      </label>
      </li>
      <li>
      <label> Description
        <input
        type="text"
        name="description"
        value={values.description}
        onChange={changeHandler}
         />
      </label>
      </li>
      <li>
      <label> Date
        <input
        type="text"
        name="date"
        value={values.date}
        onChange={changeHandler}
         />
      </label>
      </li>
      <li>
      <label> Creator
        <input
        type="text"
        name="creator"
        value={values.creator}
        onChange={changeHandler}
         />
      </label>
      </li>
      <li>
      <label> Location
        <input
        type="text"
        name="location"
        value={values.location}
        onChange={changeHandler}
         />
      </label>
      <br />
      <button type="submit" onClick={formSubmit}>Submit ze Potluck</button>
      </li>
    </form>

    const thisPotluck = 
    <ul>
    <li>{editing ? <input /> : <p>{potluck.title}</p>}</li>
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

  return (
    <div>
      {editing ? <p>You are currently editing the potluck. </p> : <button type="submit" onClick={buttonToggle}>Edit ze Potluck</button>}

      {editing ? form : thisPotluck }
    
    </div>

  );
}

export default MyPotLuckCard;
