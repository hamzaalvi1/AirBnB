"use client";
import { ExploreStepsConstants } from "@/app/config/constants";

// Stepper
import Location from "../RentModal/Steps/Location";
import Info from "../RentModal/Steps/Info";

function ExploreStepper(props) {
  const { steps, handleValuesChange, values, errors } = props;

  const handleSwitchSteps = (steps) => {
    switch (steps) {
      case ExploreStepsConstants.LOCATION:
        return (
          <Location
            handleValuesChange={handleValuesChange}
            values={values}
            errors={errors}
          />
        );
      case ExploreStepsConstants.DATE_TIME:
        return <>HELLO WORLD</>;

      case ExploreStepsConstants.INFO:
        return <Info handleValuesChange={handleValuesChange} values={values} />;
    }
  };
  return handleSwitchSteps(steps);
}

export default ExploreStepper;
