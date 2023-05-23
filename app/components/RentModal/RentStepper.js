"use client";
import { RentStepsConstants } from "@/app/config/constants";

// Stepper
import Category from "./Category";
import Location from "./Location";
import Info from "./Info";
import Images from "./Images";
import Description from "./Description";

function RentStepper(props) {
  const {
    steps,
    handleValuesChange,
    values,
    errors,
  } = props;

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
      case RentStepsConstants.INFO:
        return <Info handleValuesChange={handleValuesChange} values={values} />;
      case RentStepsConstants.IMAGES:
        return (
          <Images
            handleValuesChange={handleValuesChange}
            values={values}
            errors={errors}
          />
        );
      case RentStepsConstants.DESCRIPTION:
        return (
          <Description
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
