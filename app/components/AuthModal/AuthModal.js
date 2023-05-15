"use client";
import Login from "./Login";
import Register from "./Register";
import OAuthButtons from "./OAuthButtons";

import { Modal } from "../Modal";
import { orTextStyles } from "./AuthModalsStyles";
import { useSelector, useDispatch } from "react-redux";
import { AuthConstants } from "@/app/config/constants";
import { Box, Text } from "@chakra-ui/react";
import { isModalOpen } from "@/store/Slices/AuthModal";
import { AuthHeadings, AuthBottomTextContent } from "./AuthContent";

function AuthModal(props) {

  const { isOpen, onClose } = props;
  const dispatch = useDispatch();
  const { view } = useSelector((state) => state.authModal);


  const toggleModal = (toggle) =>
    dispatch(isModalOpen({ open: true, view: toggle }));

  return (
    <Modal
      title={view}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      styleProps={{ borderRadius: "lg" }}
    >
      <Box as={"div"} my={"1rem"}>
        <AuthHeadings view={view} AuthConstants={AuthConstants} />
        {view == AuthConstants.SIGNUP && <Register />}
        {view == AuthConstants.LOGIN && <Login />}
        <Text sx={orTextStyles}>or</Text>
        <OAuthButtons />
        <AuthBottomTextContent
          AuthConstants={AuthConstants}
          toggleModal={toggleModal}
          view={view}
        />
      </Box>
    </Modal>
  );
}

export default AuthModal;
