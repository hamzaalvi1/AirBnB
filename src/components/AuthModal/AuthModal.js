"use client";
import { Heading } from "@chakra-ui/react";
import { Modal } from "../Modal";
import { Input } from "../Input";

function AuthModal(props) {
  const { isOpen, onClose } = props;
  return (
    <Modal
      title={"Log in or Sign Up"}
      isOpen={isOpen}
      onClose={onClose}
      size={"xl"}
      styleProps={{ borderRadius: "lg" }}
    >
      <Heading variant={"primary"}>Welcome to Airbnb</Heading>
      <Input
        placeholder={"Enter your email address"}
        type="text"
        label={true}
        labelText={"Email"}
      />
      <Input
        placeholder={"Enter your password"}
        type="password"
        label={true}
        labelText={"Password"}
      />
    </Modal>
  );
}

export default AuthModal;
