"use client";
import Login from "./Login";
import Register from "./Register";
import OAuthButtons from "./OAuthButtons";

import { Modal } from "../Modal";
import { orTextStyles } from "./AuthModalsStyles";
import { AuthConstants } from "@/app/config/constants";
import { Box, Text } from "@chakra-ui/react";
import { AuthHeadings, AuthBottomTextContent } from "./AuthContent";

function AuthModal(props) {
  const { isOpen, onClose, title, onOpen } = props;
  const handleToggle = (title) => onOpen({ title: title });
  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      styleProps={{ borderRadius: "lg" }}
    >
      <Box as={"div"} my={"1rem"}>
        <AuthHeadings view={title} AuthConstants={AuthConstants} />
        {title == AuthConstants.SIGNUP ? <Register /> : <Login />}
        <Text sx={orTextStyles}>or</Text>
        <OAuthButtons />
        <AuthBottomTextContent
          AuthConstants={AuthConstants}
          handleToggle={handleToggle}
          view={title}
        />
      </Box>
    </Modal>
  );
}

export default AuthModal;
