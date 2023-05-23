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
    [RentConstants.INFO]: "",
    [RentConstants.PRICE]: 0,
    [RentConstants.IMAGES]: "",
    [RentConstants.TITLE]: "",
    [RentConstants.LOCATION]: null,
    [RentConstants.CATEGORY]: "",
    [RentConstants.ROOM_COUNT]: 1,
    [RentConstants.GUEST_COUNT]: 1,
    [RentConstants.DESCRIPTION]: "",
    [RentConstants.BATHROOM_COUNT]: 1,
  };
  const handleOnClose = () => {
    setRentStepper(RentStepsConstants.CATEGORY);
    onClose();
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
    } else if (rentStepper == RentStepsConstants.LOCATION && !values.location) {
      setError(RentConstants.LOCATION, "Please select the location.");
      return;
    } else if (rentStepper == RentStepsConstants.IMAGES && !values.imgSrc) {
      setError(RentConstants.IMAGES, "Please select the upload image.");
      return;
    } else if (rentStepper == RentStepsConstants.DESCRIPTION && !values.title) {
      setError(RentConstants.TITLE, "Title is mandatory field");
      return;
    } else if (
      rentStepper == RentStepsConstants.DESCRIPTION &&
      !values.description
    ) {
      setError(RentConstants.DESCRIPTION, "Description is mandatory field");
      return;
    } else {
      setRentStepper(rentStepper + 1);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleOnClose}
      size={"lg"}
      styleProps={{ borderRadius: "md" }}
      title={title}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          if (rentStepper == RentStepsConstants.PRICE && !values.price) {
            return;
          }
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
                {rentStepper == RentStepsConstants.PRICE ? (
                  <Button
                    fontWeight={"bold"}
                    title={"Submit"}
                    type={"submit"}
                    variant={"primary"}
                    loading={false}
                  />
                ) : (
                  <Button
                    fontWeight={"bold"}
                    handleClick={(e) => {
                      e.stopPropagation;
                      handleNextStep(values, setFieldError);
                    }}
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
