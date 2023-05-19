"use client";
import { RentStepsConstants } from "@/app/config/constants";

// Stepper
import Category from "./Category";

function RentStepper(props) {
  const { step } = props;
  const handleSwitchSteps = (step) => {
    switch (step) {
      case RentStepsConstants.CATEGORY:
        return <Category />;
    }
  };
  return handleSwitchSteps(step);
}

export default RentStepper;
