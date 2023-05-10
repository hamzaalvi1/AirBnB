"use client";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Formik } from "formik";
import { Button } from "../Button";
import { LoginSchema } from "./ValidationSchema";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { orTextStyles } from "./AuthModalsStyles";

function AuthModal(props) {
  const { isOpen, onClose } = props;
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Modal
      title={"Log in or Sign Up"}
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
      styleProps={{ borderRadius: "lg" }}
    >
      <Box as={"div"} my={"1.5rem"}>
        <Heading variant={"primary"}>Welcome to Airbnb</Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
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
                  type="text"
                  label={true}
                  labelText={"Email"}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  name="email"
                  errorText={errors.email}
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
                />
                <Button title={"Continue"} type="submit" variant={"primary"} />
              </form>
            );
          }}
        </Formik>
        <Text sx={orTextStyles}>or</Text>
        <Flex as={"div"} flexFlow={"column"}>
          <Button
            textStyle="secondary"
            variant={"oAuth"}
            title="Continue with Google"
            // loading={oAuthLoading.google}
            leftIcon={<FcGoogle fontSize={"20px"} />}
          />
          <Button
            textStyle="secondary"
            variant={"oAuth"}
            isDisabled={true}
            title="Continue with Apple"
            leftIcon={<FaApple fontSize={"20px"} />}
          />
        </Flex>
      </Box>
    </Modal>
  );
}

export default AuthModal;
