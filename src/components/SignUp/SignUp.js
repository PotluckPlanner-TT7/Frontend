import React from "react";
import SignUpDiv from "./SignUpStyles";
import { useState } from "react";
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
  const [buttonDis, setButtonDis] = useState(true);

  // OnSubmit is fed to Formik
  const onSubmit = (values) => {
    setNewUser(values);
  };

  // Formik function doing all the work
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // Return main sign up form component
  return (
    <SignUpDiv>
      <p> User Sign Up</p>
      <div class="formCont">
        <form onSubmit={formik.handleSubmit}>
          <div class="entry">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
          </div>
          {formik.errors.name && formik.touched.name ? (
            <span id="error"> {formik.errors.name} </span>
          ) : null}

          <div class="entry">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              {...formik.getFieldProps("email")}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span id="error"> {formik.errors.email} </span>
          ) : null}

          <div class="entry">
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="MM/DD/YYYY"
              {...formik.getFieldProps("birthday")}
            />
          </div>
          {formik.errors.birthday && formik.touched.birthday ? (
            <span id="error"> {formik.errors.birthday} </span>
          ) : null}

          <div class="entry">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              {...formik.getFieldProps("password")}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span id="error"> {formik.errors.password} </span>
          ) : null}

          <button type="submit" disabled={true}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </SignUpDiv>
  );
};

export default SignUp;
