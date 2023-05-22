"use client";

import dynamic from "next/dynamic";

import { useMemo } from "react";
import { Select } from "../Select";
import { useCountries } from "@/app/hooks";
import { RentHeading } from "./RentContent";
import { Box, Flex } from "@chakra-ui/react";
import { RentConstants } from "@/app/config/constants";
import { FormikErrorText } from "../FormikErrorText";

import Flags from "country-flag-icons/react/3x2";

function Location(props) {
  const { handleValuesChange, values, errors } = props;
  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [values.location]
  );
  const { getAllCountries } = useCountries();
  const formattedOptions = (options) => {
    const Flag = Flags[options.countryCode];
    return (
      <Flex as="div" align="center" gap={"5px"}>
        <Flag
          title={options.countryCode}
          style={{ display: "inline-block", height: "1em", width: "1em" }}
        />
        {options.label}
        <Box as="span" fontSize={"sm"} color={"gray.500"}>
          {options.region}
        </Box>
      </Flex>
    );
  };
  return (
    <Box as="div" mt={"1rem"}>
      <RentHeading
        heading={"Where is your place located?"}
        paragraph={"Help guest found out you!"}
      />
      <Select
        placeholder={"Anywhere"}
        clearable={true}
        handleChange={(val) => handleValuesChange(RentConstants.LOCATION, val)}
        value={values.location}
        options={getAllCountries()}
        formatOptionLabel={(options) => formattedOptions(options)}
      />
      <FormikErrorText
        fieldName={RentConstants.LOCATION}
        errorObj={errors}
        fontSize={"15px"}
        margin={"10px 0 0"}
        fontWeight={"black"}
        padding={0}
      />
      <Map coords={values?.location?.latlng} />
    </Box>
  );
}

export default Location;
