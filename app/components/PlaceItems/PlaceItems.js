"use client";
import { GridItem, Box, Flex, Text } from "@chakra-ui/react";
import { placeItemsImageStyles, placeItemsStyles } from "./styles";
import { useCountries } from "@/app/hooks";
import { Favorite } from "../Favorite";
import Image from "next/image";

function PlaceItems(props) {
  const { listItem } = props;
  const { getCountryByValue } = useCountries();
  const location = getCountryByValue(listItem?.locationValue);
  return (
    <GridItem w="100%" as={"div"} pos="relative">
      <Box as="div" sx={placeItemsStyles}>
        <Box as="div" sx={placeItemsImageStyles}>
          <Image
            src={listItem?.imageSrc}
            alt={listItem?.id}
            fill
            className="list-img"
          />
          <Favorite />
        </Box>
        <Flex flexFlow={"column"} as="div" margin={"5px 5px 0"}>
          <Flex as="div" align={"baseline"}>
            <Text as="span" fontWeight={"bold"} fontSize={"md"}>
              {location?.label}
            </Text>
            ,
            <Text
              as="span"
              marginInline={"2px"}
              fontWeight={"bold"}
              fontSize={"sm"}
              color={"gray.500"}
            >
              {location?.region}
            </Text>
          </Flex>
          <Flex as="div" align={"baseline"}>
            <Text
              as="span"
              fontWeight={"bold"}
              fontSize={"md"}
              color={"gray.500"}
            >
              {listItem?.category}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </GridItem>
  );
}

export default PlaceItems;
