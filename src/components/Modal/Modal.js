"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
    size = "md",
    ...rest
  } = props;
  return (
    <Modal
      isCentered={isCentered}
      motionPresent={motionPresent}
      isOpen={isOpen}
      onClose={onClose}
      size= {size}
      {...rest}
    >
      <ModalOverlay bg="blackAlpha.300" sx={overlayStyles} />
      <ModalContent sx={styleProps}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {isFooterEnabled && <ModalFooter>{footerContent}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
