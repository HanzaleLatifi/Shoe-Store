import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import { signupUser } from "../../services/signupUser";
import "./SiqnupForm.css";
import { useState } from "react";
import { useAuthAction } from "../../providers/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phoneNumber: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().required("Email is required").email("email is invalid"),
  password: Yup.string().required("password is Required"),
  passwordConfirm: Yup.string()
    .required("password Confirm is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  phoneNumber: Yup.string().required("is required"),
});

function SingnupForm({ history }) {
  const [error, seterror] = useState(null);
  const setAuth = useAuthAction();

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userdata = {
      name,
      email,
      password,
      phoneNumber,
    };
    try {
      const { data } = await signupUser(userdata);
      console.log(data);
      setAuth(data);
      history.push("/");
    } catch (error) {
      if (error.response) {
        seterror(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div style={{ minHeight: "60vh" }} className="Form-container">
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" />
        <Input formik={formik} label="phoneNumber" name="phoneNumber" />

        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="Password Confirm"
          name="passwordConfirm"
          type="password"
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formik.isValid}
        >
          Sign Up
        </button>
        {error && (
          <p className="error" style={{ fontSize: "2rem" }}>
            {error}
          </p>
        )}
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default withRouter(SingnupForm);
