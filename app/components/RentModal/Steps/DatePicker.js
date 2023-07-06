"use client";
import { Box } from "@chakra-ui/react";
import { Calender } from "../../Calender";
import { RentHeading } from "../RentContent";
import { FormikErrorText } from "../../FormikErrorText";
import { ExploreConstants } from "@/app/config/constants";

function DatePicker(props) {
  const { handleValuesChange, values, errors } = props;

  const handleDateChanged = (date) => {
    handleValuesChange(ExploreConstants.DATE_TIME, date);
  };

  return (
    <Box as="div" mt={"1rem"}>
      <RentHeading
        heading={"Please select the date for vacations"}
        paragraph={"Help guest found out you!"}
      />
      <Calender
        handleDateChanged={handleDateChanged}
        ranges={values?.dateTime}
        errors={errors}
      />
      <FormikErrorText
        fieldName={ExploreConstants.DATE_TIME}
        errorObj={errors}
        fontSize={"15px"}
        margin={"10px 0 0"}
        fontWeight={"black"}
        padding={0}
      />
    </Box>
  );
}

export default DatePicker;
