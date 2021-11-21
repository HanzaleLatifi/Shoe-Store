import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import { useState } from "react";
import { loginUser } from "../../services/loginUser";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("email is invalid"),
  password: Yup.string().required("password is Required"),
});

function LoginForm() {
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="Form-container">
      <form onSubmit={formik.handleSubmit} className="Form">
        <Input formik={formik} label="Email" name="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formik.isValid}
        >
          Login
        </button>
        {error && (
          <p className="error" style={{ fontSize: "2rem" }}>
            {error}
          </p>
        )}
        <Link to="/signup">signup</Link>
      </form>
    </div>
  );
}

export default LoginForm;
