import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import { useState, useEffect } from "react";
import { loginUser } from "../../services/loginUser";
import { useAuth, useAuthAction } from "../../providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("email is invalid"),
  password: Yup.string().required("password is Required"),
});

function LoginForm({ history }) {
  const [error, setError] = useState(null);
  const setAuth = useAuthAction();
  const query = useQuery();
  const auth = useAuth();
  const redirect = query.get("redirect") || "/";

  useEffect(() => {
    //if user login . fast go to checkout
    if (auth) history.push(redirect);
  }, [auth, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setError(null);
      history.push(redirect);
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
        <Link to={`/signup?redirect=${redirect}`}>signup</Link>
      </form>
    </div>
  );
}

export default withRouter(LoginForm);
