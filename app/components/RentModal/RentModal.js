"use client";
import { Modal } from "../Modal";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";

const RentModal = (props) => {
  const { isOpen, onClose, title } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={"lg"}
      styleProps={{ borderRadius: "md" }}
    >
      <Box as="div" my="1rem">
        <RentHeading
          heading={"Which of these best describes your place"}
          paragraph={"Pick a category"}
        />
      </Box>
    </Modal>
  );
};

export default RentModal;
