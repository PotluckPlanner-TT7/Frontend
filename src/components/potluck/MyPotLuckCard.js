import React, { useState } from "react";

function MyPotLuckCard(props) {
  const {potluck} = props;

  const [ editing, setEditing ] = useState(false)
  const [ values, setValues ] = useState(potluck)

  const changeHandler = (event) => {
    console.log(event)
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const formSubmit = (event) => {
    event.preventDefault();
    if(editing){
      console.log("submit call fired baybeeee")
    } else {
      console.log("editing in submit call evaluated to false")
    }
    //Add Put request here.
    //State toggle in submitHandler
  };

  const buttonToggle = (event) => {
    setEditing(!editing)
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

      <button type="submit" onClick={formSubmit}>Save pot</button>
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
      {editing ? null : <button type="submit" onClick={buttonToggle}>Submit ze Pot</button>}

      {editing ? form : thisPotluck }
    
    </div>

  );
}

export default MyPotLuckCard;
