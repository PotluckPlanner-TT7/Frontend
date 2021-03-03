import React from "react";
import LogInDiv from "./LogInStyles";
import TextError from "../SignUp/TextError";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { setUserData } from "./../../store/actions/loginActions";

// Initial Sign Up form values
const initialValues = {
  email: "outdatedemail1992@netscape.com",
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
  const [user, setUser] = useState(initialValues);

  // check how often this is running****
  if (props.isLoggedIn) {
    props.history.push("/home");
  }

  const onSubmit = (values) => {
    setUser(values);
    setUserData(user);
  };

  // Return main LogIn form component
  return (
    <LogInDiv>
      <h1> Login</h1>
      <div className="formCont">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(formik) => {
            console.log("formik props", formik);
            return (
              <Form>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <ErrorMessage name="email" component={TextError} />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <ErrorMessage name="password" component={TextError} />

                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
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
