"use client";
import Login from "./Login";
import Register from "./Register";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { orTextStyles } from "./AuthModalsStyles";
import { useSelector, useDispatch } from "react-redux";
import { AuthConstants } from "@/config/constants";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import { isModalOpen } from "@/store/Slices/AuthModal";

function AuthModal(props) {
  const { isOpen, onClose } = props;
  const dispatch = useDispatch();
  const { view } = useSelector((state) => state.authModal);

  const toggleModal = (toggle) => {
    console.log(toggle);
    dispatch(isModalOpen({ open: true, view: toggle }));
  };
  return (
    <Modal
      title={view}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      styleProps={{ borderRadius: "lg" }}
    >
      <Box as={"div"} my={"1rem"}>
        <Heading variant={"primary"} my={"5px"} fontWeight={"bold"}>
          {view == AuthConstants.SIGNUP ? "Welcome to Airbnb" : "Welcome Back"}
        </Heading>
        <Text fontSize={13} as={"p"} my={"10px"} textStyle="secondary">
          {view == AuthConstants.SIGNUP
            ? "Create an Account"
            : "Login to your account!"}
        </Text>
        {view == AuthConstants.SIGNUP && <Register />}
        {view == AuthConstants.LOGIN && <Login />}
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
        {AuthConstants.SIGNUP ? (
          <Text fontSize={"sm"} textAlign={"center"} textStyle="secondary">
            Already have an account ?{" "}
            <Text
              fontWeight={"bold"}
              as={"span"}
              color={"blue.500"}
              cursor={"pointer"}
              onClick={() => toggleModal(AuthConstants.LOGIN)}
            >
              Log In
            </Text>
          </Text>
        ) : (
          <Text
            fontSize={"sm"}
            textAlign={"center"}
            textStyle="secondary"
            cursor={"pointer"}
          >
            Don't have account ?{" "}
            <Text
              fontWeight={"bold"}
              as={"span"}
              color={"blue.500"}
              cursor={"pointer"}
              onClick={() => toggleModal(AuthConstants.SIGNUP)}
            >
              Signup
            </Text>
          </Text>
        )}
      </Box>
    </Modal>
  );
}

export default AuthModal;
