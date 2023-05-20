"use client";
import { useState } from "react";
import { Modal } from "../Modal";
import { Formik } from "formik";
import { Button } from "../Button";
import { Box } from "@chakra-ui/react";
import { stepperButtons } from "./RentModalStyles";
import { RentStepsConstants, RentConstants } from "@/app/config/constants";

import RentStepper from "./RentStepper";

const RentModal = (props) => {
  const { isOpen, onClose, title } = props;
  const [rentStepper, setRentStepper] = useState(RentStepsConstants.CATEGORY);

  const initialValues = {
    [RentConstants.CATEGORY]: "",
    [RentConstants.LOCATION]: "",
    [RentConstants.INFO]: "",
    [RentConstants.IMAGES]: "",
    [RentConstants.DESCRIPTION]: "",
    [RentConstants.PRICE]: "",
  };

  const handleGoBack = (e) => {
    e.stopPropagation();
    if (rentStepper == RentStepsConstants.CATEGORY) {
      return;
    }
    setRentStepper(rentStepper - 1);
  };

  const handleNextStep = (values, setError) => {
    if (rentStepper == RentStepsConstants.CATEGORY && !values.category) {
      setError(RentConstants.CATEGORY, "Place is required please select.");
      return;
    } else {
      setRentStepper(rentStepper + 1);
    }
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
          const {
            isSubmitting,
            handleSubmit,
            setFieldValue,
            setFieldError,
            errors,
            values,
          } = formikProps;

          const handleValuesChange = (type, value) =>
            setFieldValue(type, value);
          return (
            <form onSubmit={handleSubmit}>
              <RentStepper
                steps={rentStepper}
                values={values}
                errors={errors}
                handleValuesChange={handleValuesChange}
              />
              <Box as="div" sx={stepperButtons}>
                <Button
                  fontWeight={"bold"}
                  title={"Back"}
                  type="button"
                  variant={"secondary"}
                  disabled={rentStepper === RentStepsConstants.CATEGORY}
                  handleClick={handleGoBack}
                />
                {rentStepper === RentStepsConstants.PRICE ? (
                  <Button
                    fontWeight={"bold"}
                    title={"Submit"}
                    type={"submit"}
                    variant={"primary"}
                    loading={isSubmitting}
                  />
                ) : (
                  <Button
                    fontWeight={"bold"}
                    handleClick={() => handleNextStep(values, setFieldError)}
                    title={"Next"}
                    type={"button"}
                    variant={"primary"}
                  />
                )}
              </Box>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default RentModal;
