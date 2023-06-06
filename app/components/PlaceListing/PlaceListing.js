"use client";
import { Grid, Container } from "@chakra-ui/react";
import { PlaceItems } from "../PlaceItems";

function PlaceListing(props) {
  const { listings } = props;
  return (
    <Container maxW={"container.2xl"}>
      {" "}
      <Grid as="div" templateColumns="repeat(5, 1fr)" gap={5}>
        {listings.map((list) => {
          return <PlaceItems listItem={list} key={list.id} />;
        })}
      </Grid>
    </Container>
  );
}

export default PlaceListing;
