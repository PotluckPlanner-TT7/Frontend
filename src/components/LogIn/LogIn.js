import React from "react";
import LogInDiv from "./LogInStyles";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

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
  const [User, setUser] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);

  // Where form data gets pushed on submit button click
  const onSubmit = (values) => {
    setUser(values);
    console.log(values);
  };

  // Formik function doing a lot of form work
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // Sets button to working or disabled based on inputs
  useEffect(() => {
    validationSchema
      .isValid(formik.values)
      .then((valid) => setDisabled(!valid));
  }, [formik.values]);

  // Return main LogIn form component
  return (
    <LogInDiv>
      <h1> Login</h1>
      <div className="formCont">
        <form onSubmit={formik.handleSubmit}>
          <div className="entry">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={formik.values.email}
              {...formik.getFieldProps("email")}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="check"> {formik.errors.email} </span>
          ) : null}
          <div className="entry">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={formik.values.password}
              {...formik.getFieldProps("password")}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="check"> {formik.errors.password} </span>
          ) : null}

          <button type="submit" disabled={disabled}>
            Submit{" "}
          </button>
          {formik.touched.email && formik.touched.name && disabled ? (
            <span className="check">
              {" "}
              *please check all fields are filled out{" "}
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
    </LogInDiv>
  );
};

export default LogIn;
