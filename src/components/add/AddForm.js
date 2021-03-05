import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPotLuck } from "../../store/actions/potluckAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

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
    guests: [],
    potluck_items: [],
  };
  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPotLuck(formValues);
    history.push("/my-potlucks");
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <label htmlFor="organizer_id">Your User ID</label>
        <TextField
          fullWidth
          type="text"
          name="organizer_id"
          onChange={onChange}
          placeholder="Organizer ID"
          id="organizer_id"
          value={formValues.organizer_id}
        />
        <br />
        <label htmlFor="title">Title</label>
        <TextField
          fullWidth
          type="text"
          name="potluck_title"
          onChange={onChange}
          placeholder="Title"
          id="title"
          value={formValues.potluck_title}
        />
        <br />
        <label htmlFor="location">Location</label>
        <TextField
          fullWidth
          type="text"
          name="potluck_location"
          onChange={onChange}
          placeholder="Location"
          id="location"
          value={formValues.potluck_location}
        />
        <br />
        <label htmlFor="description">Description</label>
        <TextField
          fullWidth
          type="text"
          name="potluck_description"
          onChange={onChange}
          placeholder="Description"
          id="description"
          value={formValues.potluck_description}
        />
        <br />
        <label htmlFor="date">Date</label>
        <TextField
          fullWidth
          type="text"
          name="potluck_date"
          onChange={onChange}
          placeholder="MM/DD/YYYY"
          id="date"
          value={formValues.potluck_date}
        />
        <br />
        <label htmlFor="time">Time</label>
        <TextField
          fullWidth
          type="text"
          name="potluck_time"
          onChange={onChange}
          placeholder="15:00-24hr format"
          id="time"
          value={formValues.potluck_time}
        />
        <br />
        <Button type="submit" color="secondary" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
  };
};
export default connect(mapStateToProps, { addPotLuck })(AddForm);
