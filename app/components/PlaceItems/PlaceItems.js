"use client";
import { GridItem, Box } from "@chakra-ui/react";
import { placeItemsStyles } from "./styles";
import Image from "next/image";

function PlaceItems(props) {
  const { listItem } = props;
  return (
    <GridItem w="100%" as={"div"} pos="relative">
      <Box as="div" sx={placeItemsStyles}>
        <Image src={listItem?.imageSrc} alt={listItem?.id} fill  className="list-img"/>
      </Box>
    </GridItem>
  );
}

export default PlaceItems;
