"use client";
import { useState } from "react";
import { Modal } from "../Modal";
import { Formik } from "formik";
import RentStepper from "./RentStepper";

const RentModal = (props) => {
  const { isOpen, onClose, title } = props;
  const [rentStepper, setRentStepper] = useState(0);

  const initialValues = {
    category: "",
    location: "",
    info: "",
    images: "",
    description: "",
    price: "",
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
      styleProps={{ borderRadius: "md" }}
      title={title}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => {
          const { setSubmitting, handleSubmit, setFieldValue, setFieldError } =
            formikProps;

          const handleValuesChange = (type, value) =>
            setFieldValue(type, value);

          const handleErrorOccured = (fieldName, error) =>
            setFieldError(fieldName, error);

          return (
            <form onSubmit={handleSubmit}>
              <RentStepper
                step={rentStepper}
                handleValuesChange={handleValuesChange}
              />
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default withFormik(RentModal);
