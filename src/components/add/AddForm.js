import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPotLuck } from "../../store/actions/potluckAction"


function AddForm(props) {
  const { userData, addPotLuck } = props;
  let history = useHistory();
    const initialValues = {
      organizer_id: userData.id,
      potluck_title: "",
      potluck_location: "",
      potluck_description: "",
      potluck_date: "",
      potluck_time: "",
    };
  const [formValues, setFormValues] = useState(initialValues);
  console.log(userData);
  console.log(formValues)
  const onChange = (e) => {
    console.log(e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    addPotLuck(formValues);
    history.push("/my-potlucks");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="organizer_id">Your User ID</label>
        <input
          type="text"
          name="organizer_id"
          onChange={onChange}
          placeholder="Organizer ID"
          id="organizer_id"
          value={formValues.organizer_id}
        />
        <br/>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="potluck_title"
          onChange={onChange}
          placeholder="Title"
          id="title"
          value={formValues.potluck_title}
        />
        <br />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="potluck_location"
          onChange={onChange}
          placeholder="Location"
          id="location"
          value={formValues.potluck_location}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="potluck_description"
          onChange={onChange}
          placeholder="Description"
          id="description"
          value={formValues.potluck_description}
        />
        <br />
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="potluck_date"
          onChange={onChange}
          placeholder="Date"
          id="date"
          value={formValues.potluck_date}
        />
        <br />
        <label htmlFor="time">Time</label>
        <input
          type="text"
          name="potluck_time"
          onChange={onChange}
          placeholder="Time"
          id="time"
          value={formValues.potluck_time}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
  };
};
export default connect(mapStateToProps, {addPotLuck})(AddForm);
