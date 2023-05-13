"use client";

import { Modal } from "../Modal";
import { Input } from "../Input";
import { Formik } from "formik";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { orTextStyles } from "./AuthModalsStyles";
import { registerUser } from "@/store/Slices/Auth";
import { LoginSchema } from "./ValidationSchema";
import { useDispatch } from "react-redux";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";

function AuthModal(props) {
  const { isOpen, onClose, title } = props;
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
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      styleProps={{ borderRadius: "lg" }}
    >
      <Box as={"div"} my={"1rem"}>
        <Heading variant={"primary"} my={"5px"} fontWeight={"bold"}>
          Welcome to Airbnb
        </Heading>
        <Text fontSize={13} as={"p"} my={"10px"} textStyle="secondary">
          Create an Account
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
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

        <Text sx={orTextStyles}>or</Text>
        <Flex as={"div"} flexFlow={"column"}>
          <Button
            fontWeight="bold"
            textStyle="secondary"
            variant={"oAuth"}
            title="Continue with Google"
            // loading={oAuthLoading.google}
            leftIcon={
              <FcGoogle
                size={24}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            }
          />
          <Button
            fontWeight="bold"
            textStyle="secondary"
            variant={"oAuth"}
            title="Continue with Github "
            leftIcon={
              <FaGithub
                size={24}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            }
          />
        </Flex>
        <Text
          fontSize={"sm"}
          textAlign={"center"}
          textStyle="secondary"
          cursor={"pointer"}
        >
          Already have an account ?{" "}
          <Text fontWeight={"bold"} as={"span"} color={"blue.500"}>
            Log In
          </Text>
        </Text>
      </Box>
    </Modal>
  );
}

export default AuthModal;
