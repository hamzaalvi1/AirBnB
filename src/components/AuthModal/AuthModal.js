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
            isDisabled={true}
            title="Continue with Apple"
            leftIcon={
              <FaApple
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
        <Text  my={"0.25rem"} fontSize={"sm"} textAlign={"center"} textStyle="secondary" cursor={"pointer"}>
          Already have an account ? <Text fontWeight={"bold"} as={"span"} color={"blue.500"}>Log In</Text>
        </Text>
      </Box>
    </Modal>
  );
}

export default AuthModal;
