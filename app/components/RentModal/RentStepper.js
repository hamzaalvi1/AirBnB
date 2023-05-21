"use client";
import { RentStepsConstants } from "@/app/config/constants";

// Stepper
import Category from "./Category";
import Location from "./Location";

function RentStepper(props) {
  const { steps, handleValuesChange, values, errors } = props;
  const handleSwitchSteps = (steps) => {
    switch (steps) {
      case RentStepsConstants.CATEGORY:
        return (
          <Category
            handleValuesChange={handleValuesChange}
            values={values}
            errors={errors}
          />
        );
      case RentStepsConstants.LOCATION:
        return (
          <Location
            handleValuesChange={handleValuesChange}
            values={values}
            errors={errors}
          />
        );
    }
  };
  return handleSwitchSteps(steps);
}

export default RentStepper;
