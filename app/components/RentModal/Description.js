"use client";
import { Box, Flex } from "@chakra-ui/react";
import { RentHeading } from "./RentContent";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { RentConstants } from "@/app/config/constants";
function Description(props) {
  const { values, errors, handleValuesChange } = props;
  return (
    <Box as="div" mt="1rem">
      <RentHeading
        heading="How would you describe your place?"
        paragraph="Short and sweet works best!"
      />
      <Flex flexDirection={"column"} gap="15px">
        <Input
          errorTextStyle = {{fontWeight: "black",marginLeft: "5px"}} 
          name={RentConstants.TITLE}
          placeholder="Title"
          value={values.title}
          type="text"
          isInvalid={errors.title}
          error={errors.title}
          errorText={"Title is mandatory field."}
          onChange={(e) =>
            handleValuesChange(RentConstants.TITLE, e.target.value)
          }
        />
        <TextArea
          name={RentConstants.DESCRIPTION}
          placeholder="Description"
          resize="none"
          minHeight="150px"
          values={values.description}
          type="text"
          isInvalid={errors.description}
          error={errors.description}
          errorText={"Description is mandatory field."}
          onChange={(e) =>
            handleValuesChange(RentConstants.DESCRIPTION, e.target.value)
          }
        />
      </Flex>
    </Box>
  );
}

export default Description;
