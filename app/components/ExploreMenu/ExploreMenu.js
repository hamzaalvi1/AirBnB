"use client";
import { Flex, Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useToggleExplore, useCountries } from "@/app/hooks";
import { exploreMenuStyles, selectStyles, selectTheme } from "./styles";
import { Select } from "../Select";

import Flags from "country-flag-icons/react/3x2";

function ExploreMenu() {
  const { handleCloseExplore } = useToggleExplore();
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
        <Box as="span" fontSize={"10px"} color={"gray.500"}>
          {options.region}
        </Box>
      </Flex>
    );
  };

  return (
    <Flex as="div" justify={"center"} flexFlow={"column"}>
      <Flex as="div" alignItems={"center"} gap={"5px"} justify={"center"}>
        <Heading
          as="h6"
          fontSize={"18px"}
          variant={"primary"}
          fontWeight={"bold"}
          color={"primaryColor"}
        >
          Experience the selection
        </Heading>
        <Box as="span" onClick={handleCloseExplore}>
          <RiCloseCircleFill size={18} style={{ cursor: "pointer" }} />
        </Box>
      </Flex>
      <Grid as={"div"} sx={exploreMenuStyles}>
        <GridItem>
          <Select
            changebleStyles={selectStyles}
            changebleTheme={selectTheme}
            placeholder={"Anywhere"}
            clearable={true}
            handleChange={(val) => console.log(val)}
            value={""}
            options={getAllCountries()}
            formatOptionLabel={(options) => formattedOptions(options)}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default ExploreMenu;
