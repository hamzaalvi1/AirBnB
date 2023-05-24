"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

function CustomModal(props) {
  const {
    isOpen,
    onClose,
    title,
    styleProps,
    children,
    isFooterEnabled = false,
    footerContent,
    isCentered = true,
    motionPresent = "slideInBottom",
    overlayStyles,
    titleStyles,
    size = "md",
    ...rest
  } = props;
  return (
    <Modal
      isCentered={isCentered}
      motionPresent={motionPresent}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      // onOverlayClick={false}
      {...rest}
    >
      <ModalOverlay bg="blackAlpha.500" sx={overlayStyles} />
      <ModalContent sx={styleProps}>
        <ModalHeader>
          <Text
            as={"h6"}
            fontWeight={"bold"}
            color={"gray.900"}
            fontSize={"md"}
            sx={titleStyles}
          >
            {title}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {isFooterEnabled && <ModalFooter>{footerContent}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
