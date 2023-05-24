"use client";
import { RentStepsConstants } from "@/app/config/constants";

// Stepper
import Category from "./Steps/Category";
import Location from "./Steps/Location";
import Info from "./Steps/Info";
import Images from "./Steps/Images";
import Description from "./Steps/Description";
import Price from "./Steps/Price";

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
      case RentStepsConstants.PRICE:
        return (
          <Price
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
