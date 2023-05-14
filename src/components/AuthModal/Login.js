import { Input } from "../Input";
import { Formik } from "formik";
import { Button } from "../Button";
import { LoginSchema } from "./ValidationSchema";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleLogin = (values, submitProps) => {
    const { resetForm, setSubmitting } = submitProps;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, submitProps) => {
        handleLogin(values, submitProps);
      }}
    >
      {(formikProps) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
        } = formikProps;

        return (
          <form onSubmit={handleSubmit}>
            <Input
              placeholder={"Enter your email address"}
              type="email"
              label={true}
              labelText={"Email"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              name="email"
              errorText={errors.email}
              autoComplete={"off"}
            />
            <Input
              placeholder={"Enter your password"}
              type="password"
              label={true}
              labelText={"Password"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              name="password"
              errorText={errors.password}
              autoComplete={"off"}
            />
            <Button
              fontWeight={"bold"}
              title={"Continue"}
              type="submit"
              variant={"primary"}
            />
          </form>
        );
      }}
    </Formik>
  );
}

export default Login;
