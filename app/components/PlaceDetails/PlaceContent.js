"use client";
import { Heading, Text } from "@chakra-ui/react";
export const PlaceContent = (props) => {
  const { heading, paragraph } = props;

  return (
    <>
      <Heading
        variant={"primary"}
        fontSize={"2xl"}
        my={"3px"}
        fontWeight={"bold"}
      >
        {heading}
      </Heading>
      <Text
        as="span"
        my={"4px"}
        fontWeight={"bold"}
        fontSize={"sm"}
        color={"gray.500"}
      >
        {paragraph?.label}, {paragraph?.region}
      </Text>
    </>
  );
};
