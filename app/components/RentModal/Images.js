"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";

function Images(props) {
  return (
    <Box as="div" mt={"1rem"}>
      <RentHeading
        heading={"Add a photo of your place"}
        paragraph={"Show guests what your place looks like!"}
      />
    </Box>
  );
}

export default Images;
