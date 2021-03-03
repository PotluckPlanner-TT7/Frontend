import React from "react";
import SignUpDiv from "./SignUpStyles";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";

// Initial Sign Up form values
const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  passwordconfirm: "",
  birthday: "",
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
  birthday: Yup.string(),
});

// React Component!
const SignUp = (props) => {
  const [newUser, setNewUser] = useState(initialValues);

  const onSubmit = (values) => {
    console.log(values);
    setNewUser(values);
  };

  // Return main sign up form component
  return (
    <SignUpDiv>
      <h1> Sign Up</h1>
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
                <Field type="text" name="name" id="name" placeholder="Name" />
                <ErrorMessage name="name" component={TextError} />

                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
                <ErrorMessage name="username" component={TextError} />

                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <ErrorMessage name="email" component={TextError} />

                <Field
                  type="date"
                  name="birthday"
                  id="birthday"
                  placeholder="Birthday: MM/DD/YYYY"
                />
                <label htmlFor="birthday"> Birthday </label>
                <ErrorMessage name="birthday" />

                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <ErrorMessage name="password" component={TextError} />

                <Field
                  type="password"
                  name="passwordconfirm"
                  id="passwordconfirm"
                  placeholder="Confirm your password"
                />
                <ErrorMessage name="passwordconfirm" component={TextError} />

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
    </SignUpDiv>
  );
};

export default SignUp;
