import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is required field"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .required("Password is required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password should be same as password")
    .required("Confirm Password is required field"),
});

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  password: Yup.string().required("Password is required"),
});

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Field is required"),
});



export { SignUpSchema, LoginSchema,ResetPasswordSchema };