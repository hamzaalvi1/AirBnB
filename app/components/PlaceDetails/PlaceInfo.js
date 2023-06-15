"use client";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export const PlaceInfo = (props) => {
  const { listDetails } = props;
  console.log(listDetails);
  return (
    <Flex as={"div"} my={"15px"} flexFlow={"column"}>
      <Flex as={"div"} columnGap={"5px"} alignItems={"center"}>
        <Heading
          variant={"primary"}
          fontSize={"lg"}
          fontWeight={"bold"}
          textTransform={"capitalize"}
        >
          Hosted by {listDetails?.user?.name}
        </Heading>
        <Box as="span">
          {listDetails?.user?.image == null ? (
            <FaUserCircle size={26} color="#A0AEC0" />
          ) : (
            <Image
              style={{ borderRadius: "50%" }}
              src={data?.user?.image}
              width={30}
              height={30}
              fetchPriority={"low"}
              alt={"avatar-img"}
            />
          )}
        </Box>
      </Flex>
      <Text
        as="span"
        mb={"15px"}
        fontWeight={"medium"}
        fontSize={"sm"}
        color={"gray.500"}
      >
        {listDetails?.guestCount} guests | {listDetails?.roomCount} rooms |{" "}
        {listDetails?.bathroomCount} bathrooms
      </Text>
      <hr />
      <Text>HELLO WORLD</Text>
    </Flex>
  );
};
