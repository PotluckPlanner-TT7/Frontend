import React from "react";
import LogInDiv from "./LogInStyles";
import TextError from "../SignUp/TextError";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { setUserData } from "./../../store/actions/loginActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// Initial Sign Up form values
const initialValues = {
  email: "testing1@testing.com",
  password: "password",
};

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .required()
    .min(6, "Password must be at least 6 characters"),
});

// Main React Component
const LogIn = (props) => {
  const { setUserData } = props;
  // const [user, setUser] = useState(initialValues);

  // check how often this is running****
  if (props.isLoggedIn) {
    props.history.push("/home");
  }

  const onSubmit = (values, onSubmitProps) => {
    // setUser(values);
    // user should be replaced by values
    console.log(values);
    setUserData(values);
    onSubmitProps.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const logger = (values) => {
    console.log(values);
  };

  // Return main LogIn form component
  return (
    <LogInDiv>
      <h1> Login</h1>
      <div className="formCont">
        <form onSubmit={formik.handleSubmit}>
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
          {/* <ErrorMessage name="email" component={TextError} /> */}
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
          {/* <ErrorMessage name="password" component={TextError} /> */}

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </LogInDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};

export default connect(mapStateToProps, { setUserData })(LogIn);
