import React from "react";
import SignUpDiv from "./SignUpStyles";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";

// Initial Sign Up form values
const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  birthday: "",
};

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  username: Yup.string()
    .trim()
    .matches(
      /^[a-z\s]+$/g,
      "Only lowercase letters and numbers are allowed in usernames"
    )
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .trim()
    .required("email is required"),
  password: Yup.string()
    .required()
    .trim()
    .min(6, "Passsword must be at least 6 characters"),
  birthday: Yup.string(),
});

// React Component!
const SignUp = (props) => {
  const [newUser, setNewUser] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);

  // Where form data gets pushed on submit button click
  const onSubmit = (values) => {
    setNewUser(values);
    console.log(values);
  };

  // Sets button to working or disabled based on inputs
  const FormikValueGet = () => {
    const { values } = useFormikContext();
    console.log(values);
    useEffect(() => {
      validationSchema.isValid(values).then((valid) => setDisabled(!valid));
    }, [values]);
    return null;
  };

  // Return main sign up form component
  return (
    <SignUpDiv>
      <h1> Sign Up</h1>
      <div className="formCont">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            setNewUser(values);
            console.log(values);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {/* onSubmit={formik.handleSubmit} */}
          <Form>
            <Field type="text" name="name" id="name" placeholder="Name" />
            <ErrorMessage name="name" />

            <Field
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              // pattern="^[a-z0-9_-]{3,16}$"
            />
            <ErrorMessage name="username" />

            <Field type="email" name="email" id="email" placeholder="email" />
            <ErrorMessage name="email" />

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
            <ErrorMessage name="password" />

            <button type="submit" disabled={disabled}>
              Submit
            </button>
            <FormikValueGet />
          </Form>
        </Formik>
      </div>
    </SignUpDiv>
  );
};

export default SignUp;
