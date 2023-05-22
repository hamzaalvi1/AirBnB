"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";
import { RentConstants } from "@/app/config/constants";

import Counter from "./Counter";

const Info = (props) => {
  const { handleValuesChange, values } = props;

  return (
    <Box as="div" mt={"1rem"}>
      <RentHeading
        heading={"Share some basics about your place"}
        paragraph={"What amenities do you have?"}
      />
      <Counter
        title="Guests"
        subtitle="How many guests do you allow?"
        handleValuesChange={handleValuesChange}
        value={values.guestCount}
        propertyCount={RentConstants.GUEST_COUNT}
      />
      <hr />
      <Counter
        title="Rooms"
        subtitle="How many rooms do you have?"
        handleValuesChange={handleValuesChange}
        value={values.roomCount}
        propertyCount={RentConstants.ROOM_COUNT}
      />
      <hr />
      <Counter
        title="Bathrooms"
        subtitle="How many bathrooms do you have?"
        handleValuesChange={handleValuesChange}
        value={values.bathroomCount}
        propertyCount={RentConstants.BATHROOM_COUNT}
      />
    </Box>
  );
};

export default Info;
