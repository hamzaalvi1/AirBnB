"use client";
import { Heading, Text } from "@chakra-ui/react";
import { useCountries } from "@/app/hooks";

export const PlaceContent = (props) => {
  const { heading, paragraph } = props;
  const { getCountryByValue } = useCountries();

  const countryDetails = getCountryByValue(paragraph);
  return (
    <>
      <Heading
        variant={"primary"}
        fontSize={"2xl"}
        my={"2px"}
        fontWeight={"bold"}
      >
        {heading}
      </Heading>
      <Text as="span" fontWeight={"bold"} fontSize={"sm"} color={"gray.500"}>
        {countryDetails?.label} {countryDetails?.region}
      </Text>
    </>
  );
};
