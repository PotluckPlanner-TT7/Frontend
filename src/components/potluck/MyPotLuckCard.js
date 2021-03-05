import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { updatePotluckData } from "../../store/actions/potluckAction";
import {connect} from "react-redux"

function MyPotLuckCard(props) {
  const {potluck} = props;
  console.log(props)

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
    props.banana(values)
    console.log(potluck.id)

      axiosWithAuth()
      .put(`https://potluckapi.herokuapp.com/api/potluck/${potluck.id}`, {potluck: values})
      .then(res => {
        console.log(res)
        setEditing(!editing)

      })
      .catch(err => {
        console.log(err)
      });
      



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
      <button type="submit">Submit ze Potluck</button>
      </li>
    </form>


    const thisPotluck = 
    <ul>
    <li>{editing ? <input /> : <p>{props.potluck.title}</p>}</li>
    <li>{props.potluck.description}</li>
    <li>{props.potluck.date}</li>
    <li>{props.potluck.creator}</li>
    <li>{props.potluck.location}</li>
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

const mapStateToProps = (state) => {
  return {
    singleState: {...state}

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    banana: (potluck) => 
    {dispatch(updatePotluckData(potluck))},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyPotLuckCard);

