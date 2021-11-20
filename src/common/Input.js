function Input({ formik, name, label, type = "text" }) {
  return (
    <div style={{ width: "100%" }}>
      <label>{label}</label>
      <input type={type} name={name} {...formik.getFieldProps(name)}></input>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
}

export default Input;
