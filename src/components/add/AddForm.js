import React, { useState } from "react";
import { connect } from "react-redux";

const initialValues = {
  organizer_id: "",
  potluck_title: "",
  potluck_location: "",
  potluck_description: "",
  potluck_date: "",
  potluck_time: "",
};

function AddForm(props) {
  const [formValues, setFormValues] = useState(initialValues);
  const { userData } = props;
  console.log(userData);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formValues);

  return (
    <div>
      <form>
        <label htmlFor="organizer_id">Your User ID</label>
        <input
          type="text"
          name="organizer_id"
          onChange={onChange}
          placeholder="Organizer ID"
          id="organizer_id"
          value={userData.id}
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
export default connect(mapStateToProps)(AddForm);
