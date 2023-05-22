"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";

import ImageUpload from "./ImageUpload";

function Images(props) {
  const {handleValuesChange,values} = props
  return (
    <Box as="div" mt={"1rem"}>
      <RentHeading
        heading={"Add a photo of your place"}
        paragraph={"Show guests what your place looks like!"}
      />

      <ImageUpload handleValuesChange={handleValuesChange} values={values} />
    </Box>
  );
}

export default Images;
