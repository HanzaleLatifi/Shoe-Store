import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import "./SiqnupForm.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().required("Email is required").email("email is invalid"),
  password: Yup.string().required("password is Required"),
  passwordConfirm: Yup.string()
    .required("password Confirm is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function SingnupForm() {
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
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}

export default SingnupForm;
