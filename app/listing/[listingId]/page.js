"use client";
import { Box,Container } from "@chakra-ui/react";
function ListingPage(props) {
  return (
      <Box as="div" className="main-wrapper">
        <Container maxW={"container.2xl"}>
        HELLO WORLD {props.params.listingId}
        </Container>
      </Box>
  );
}

export default ListingPage;
