import React from "react";
import LogInDiv from "./LogInStyles";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormikContext, Formik, Form, Field, ErrorMessage } from "formik";

// Initial Sign Up form values
const initialValues = { email: "", password: "" };

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string()
    .required()
    .min(6, "Password must be at least 6 characters"),
});

// React Component!
const LogIn = (props) => {
  const [user, setUser] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);

  // Sets button to working or disabled based on inputs
  const FormikValueGet = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      validationSchema.isValid(values).then((valid) => setDisabled(!valid));
    }, [values]);
    return null;
  };

  // Return main LogIn form component
  return (
    <LogInDiv>
      <h1> Login</h1>
      <div className="formCont">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            setUser(values);
            console.log(values);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <Field type="email" name="email" id="email" placeholder="email" />
            <ErrorMessage name="email" />
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <ErrorMessage name="password" />

            <button type="submit" disabled={disabled}>
              Submit{" "}
            </button>
            <FormikValueGet />
          </Form>
        </Formik>
      </div>
    </LogInDiv>
  );
};

export default LogIn;
