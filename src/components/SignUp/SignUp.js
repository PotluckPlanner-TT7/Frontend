import React from "react";
import SignUpDiv from "./SignUpStyles";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

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
  const [disabled, setDisabled] = useState(true);

  // Where form data gets pushed on submit button click
  const onSubmit = (values) => {
    setNewUser(values);
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

  // Return main sign up form component
  return (
    <SignUpDiv>
      <h1> Sign Up</h1>
      <div className="formCont">
        <form onSubmit={formik.handleSubmit}>
          <div className="entry">
            <input
              type="text"
              name="name"
              //
              id="name"
              placeholder="Name"
              // Add value property and onchange property
              {...formik.getFieldProps("name")}
            />
          </div>
          {formik.errors.name && formik.touched.name ? (
            <span className="check"> {formik.errors.name} </span>
          ) : null}

          <div className="entry">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              {...formik.getFieldProps("email")}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="check"> {formik.errors.email} </span>
          ) : null}

          <div className="entry">
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="Birthday: MM/DD/YYYY"
              {...formik.getFieldProps("birthday")}
            />
          </div>
          {formik.errors.birthday && formik.touched.birthday ? (
            <span className="check"> {formik.errors.birthday} </span>
          ) : null}

          <div className="entry">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="check"> {formik.errors.password} </span>
          ) : null}

          <button type="submit" disabled={disabled}>
            {" "}
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
    </SignUpDiv>
  );
};

export default SignUp;
