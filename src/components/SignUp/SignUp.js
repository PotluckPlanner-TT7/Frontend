import React from "react";
import SignUpDiv from "./SignUpStyles";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";

// Initial Sign Up form values
const initialValues = {
  name: "Max H",
  username: "mhhhhh",
  email: "test@gmail.com",
  password: "Mypass",
  passwordconfirm: "Mypass",
  // birthday: "",
};

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  username: Yup.string()
    .trim()
    .matches(
      /[a-z0-9]+$/g,
      "Only lowercase letters and numbers are allowed in usernames"
    )
    .max(10, "Maximum of 10 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .trim()
    .required("email is required"),
  password: Yup.string()
    .required()
    .trim()
    .min(6, "Password must be at least 6 characters"),
  passwordconfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
  // birthday: Yup.string(),
});

// Main React Component
const SignUp = (props) => {
  const onSubmit = (values) => {
    const splitNameArr = values.name.split(" ");
    const formattedUser = {
      username: values.username,
      password: values.password,
      email: values.email,
      firstname: splitNameArr[0],
      lastname: splitNameArr[1],
    };

    axios
      .post("https://potluckapi.herokuapp.com/api/signup", formattedUser)
      .then((res) => {
        props.history.push("/login");
      })
      .catch((err) => {
        alert("something went wrong! It was probably us...");
        console.log(err);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  // Return main sign up form component
  return (
    <SignUpDiv>
      <h1> Sign Up to PotluckParty 🍽</h1>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          {formik.isSubmitting ? <p>loading...</p> : null}
          <TextField
            fullWidth
            type="text"
            label="Name"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            type="text"
            label="Username"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />

          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          {/* <TextField
            fullWidth
            id="birthday"
            name="birthday"
            label="Birthday"
            type="date"
            value={formik.values.birthday}
            onChange={formik.handleChange}
            error={formik.touched.birthday && Boolean(formik.errors.birthday)}
            helperText={formik.touched.birthday && formik.errors.birthday}
          /> */}
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            id="passwordconfirm"
            name="passwordconfirm"
            label="Confirm Password"
            type="password"
            value={formik.values.passwordconfirm}
            onChange={formik.handleChange}
            error={
              formik.touched.passwordconfirm &&
              Boolean(formik.errors.passwordconfirm)
            }
            helperText={
              formik.touched.passwordconfirm && formik.errors.passwordconfirm
            }
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            startIcon={<SaveIcon />}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Card>
    </SignUpDiv>
  );
};

export default SignUp;
