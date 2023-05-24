"use client";
import { Box } from "@chakra-ui/react";
import { RentHeading } from "../RentContent";
import { FormikErrorText } from "../../FormikErrorText";
import { RentConstants } from "@/app/config/constants";

import ImageUpload from "./ImageUpload";

function Images(props) {
  const { handleValuesChange, values, errors } = props;
  return (
    <Box as="div" mt={"1rem"}>
      <RentHeading
        heading={"Add a photo of your place"}
        paragraph={"Show guests what your place looks like!"}
      />

      <ImageUpload handleValuesChange={handleValuesChange} values={values} />
      <FormikErrorText
        fieldName={RentConstants.IMAGES}
        errorObj={errors}
        fontSize={"15px"}
        margin={"10px 0 0"}
        fontWeight={"black"}
        padding={0}
      />
    </Box>
  );
}

export default Images;
