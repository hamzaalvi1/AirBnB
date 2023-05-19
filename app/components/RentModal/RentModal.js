"use client";
import { useState } from "react";
import { Modal } from "../Modal";
import { Formik } from "formik";
import RentStepper from "./RentStepper";

const RentModal = (props) => {
  const { isOpen, onClose, title } = props;
  const [rentStepper, setRentStepper] = useState(0);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={"lg"}
      styleProps={{ borderRadius: "md" }}
    >
      <RentStepper step={rentStepper} />
    </Modal>
  );
};

export default RentModal;
