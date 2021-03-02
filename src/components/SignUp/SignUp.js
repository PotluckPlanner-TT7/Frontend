import React from "react";
import SignUpDiv from "./SignUpStyles";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Initial Sign Up form values
const initialValues = { name: "", email: "", password: "", birthday: "" };

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .required()
    .min(6, "Passsword must be at least 6 characters"),
  birthday: Yup.string(),
});

// React Component!
const SignUp = (props) => {
  const [newUser, setNewUser] = useState(initialValues);
  const [disabled, setDisabled] = useState(false);

  // Where form data gets pushed on submit button click
  const onSubmit = (values) => {
    setNewUser(values);
    console.log(values);
  };

  // Formik function doing a lot of form work
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  // Sets button to working or disabled based on inputs
  // useEffect(() => {
  //   validationSchema
  //     .isValid(formik.values)
  //     .then((valid) => setDisabled(!valid));
  // }, [formik.values]);

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

            <Field type="text" name="email" id="email" placeholder="email" />
            <ErrorMessage name="email" />

            <Field
              type="text"
              name="birthday"
              id="birthday"
              placeholder="Birthday: MM/DD/YYYY"
            />
            <ErrorMessage name="birthday" />

            <Field
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <ErrorMessage name="password" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </SignUpDiv>
  );
};

export default SignUp;
