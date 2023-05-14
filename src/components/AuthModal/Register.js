import { Input } from "../Input";
import { Formik } from "formik";
import { Button } from "../Button";
import { registerUser } from "@/store/Slices/Auth";
import { SignUpSchema } from "./ValidationSchema";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSignUp = (values, submitProps) => {
    const { resetForm, setSubmitting } = submitProps;

    dispatch(registerUser({ values, undefined, setSubmitting, resetForm }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values, submitProps) => {
        handleSignUp(values, submitProps);
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
              placeholder={"Enter your name"}
              type="text"
              label={true}
              labelText={"Name"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name}
              name="name"
              errorText={errors.name}
              autoComplete={"new-password"}
            />
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

export default Register;
