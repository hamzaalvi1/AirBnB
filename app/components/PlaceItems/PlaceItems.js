"use client";
import { GridItem, Box, Flex, Text } from "@chakra-ui/react";
import { placeItemsImageStyles, placeItemsStyles } from "./styles";
import { useCountries } from "@/app/hooks";
import { Favorite } from "../Favorite";
import { useRouter } from "next/navigation";
import Image from "next/image";

function PlaceItems(props) {
  const { listItem, currentUser, reservedCheck = false } = props;
  const router = useRouter();
  const { getCountryByValue } = useCountries();
  const location = getCountryByValue(listItem?.locationValue);

  const handleListItemClick = () => {
    router.push(`/listing/${listItem?.id}`);
  };
  return (
    <GridItem w="100%" as={"div"} pos="relative" onClick={handleListItemClick}>
      <Box as="div" sx={placeItemsStyles}>
        <Box as="div" sx={placeItemsImageStyles}>
          <Image
            src={listItem?.imageSrc}
            alt={listItem?.id}
            fill
            sizes="(max-width: 768px) 100vw"
            className="list-img"
            fetchPriority={"low"}
          />
          <Favorite favoriteId={listItem?.id} currentUser={currentUser} />
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
          <Flex as="div" align={"baseline"} flexFlow={"column"}>
            <Text
              as="span"
              fontWeight={"bold"}
              fontSize={"14px"}
              color={"gray.500"}
            >
              {listItem?.category}
            </Text>
            <Text
              as="span"
              fontWeight={"bold"}
              fontSize={"14px"}
              color={"gray.700"}
            >
              $ {listItem?.price} day
            </Text>
          </Flex>
        </Flex>
      </Box>
    </GridItem>
  );
}

export default PlaceItems;
