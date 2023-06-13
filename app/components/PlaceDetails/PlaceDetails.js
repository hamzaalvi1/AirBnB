"use client";
import { Box, Container } from "@chakra-ui/react";
import { PlaceContent } from "./PlaceContent";

function PlaceDetails(props) {
  const { listDetails, user } = props;
  console.log(listDetails);
  return (
    <Box as="div" className="main-wrapper">
      <Container maxW={"97%"}>
        <PlaceContent
          heading={listDetails?.title}
          paragraph={listDetails?.locationValue}
        />
      </Container>
    </Box>
  );
}

export default PlaceDetails;
