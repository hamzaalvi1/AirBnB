"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { Modal } from "../Modal";
import { Formik } from "formik";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import { stepperButtons } from "../RentModal/RentModalStyles";
import {
  ExploreConstants,
  ExploreStepsConstants,
} from "@/app/config/constants";
import { InitialDateRange } from "@/app/config/constants";

import ExploreStepper from "./ExploreStepper";

const ExploreModal = (props) => {
  const { isOpen, onClose, title } = props;
  const router = useRouter();
  const [exploreStepper, setExploreStepper] = useState(
    ExploreStepsConstants.LOCATION
  );

  const initialValues = {
    [ExploreConstants.LOCATION]: null,
    [ExploreConstants.DATE_TIME]: InitialDateRange,
    [ExploreConstants.ROOM_COUNT]: 1,
    [ExploreConstants.GUEST_COUNT]: 1,
    [ExploreConstants.BATHROOM_COUNT]: 1,
  };

  const handleOnClose = () => {
    setExploreStepper(ExploreStepsConstants.LOCATION);
    onClose();
  };
  const handleGoBack = (e) => {
    e.stopPropagation();
    if (exploreStepper == ExploreStepsConstants.LOCATION) {
      return;
    }
    setExploreStepper(exploreStepper - 1);
  };

  const handleNextStep = (values, setError) => {
    if (exploreStepper == ExploreStepsConstants.LOCATION && !values.location) {
      setError(ExploreConstants.LOCATION, "Please select the location.");
      return;
    }
    // else if (
    //   exploreStepper == ExploreStepsConstants.DATE_TIME &&
    //   !values.DATE_TIME
    // ) {
    //   setError(ExploreConstants.DATE_TIME, "Please select the dates");
    //   return;
    // }
    else {
      setExploreStepper(exploreStepper + 1);
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
        onSubmit={(values, formikProps) => {
          const { setFieldError, setSubmitting, resetForm } = formikProps;
          console.log("Called");
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
            <form
              onSubmit={(e) => {
                e.stopPropagation();
                handleSubmit(e);
              }}
            >
              <ExploreStepper
                steps={exploreStepper}
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
                  disabled={exploreStepper === ExploreStepsConstants.LOCATION}
                  handleClick={handleGoBack}
                />
                {exploreStepper == ExploreStepsConstants.INFO ? (
                  <Button
                    key="submit-btn"
                    fontWeight={"bold"}
                    title={"Submit"}
                    type={"submit"}
                    variant={"primary"}
                    loading={isSubmitting}
                  />
                ) : (
                  <Button
                    key={"step-btn"}
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

export default ExploreModal;
