"use client";
import { Grid, Container } from "@chakra-ui/react";
import { PlaceItems } from "../PlaceItems";

// export const dynamic = "force-dynamic";
function PlaceListing(props) {
  const { listings, currentUser } = props;

  return (
    <Container maxW={"container.2xl"}>
      {" "}
      <Grid as="div" templateColumns="repeat(4, 1fr)" gap={-2} rowGap={5}>
        {listings.map((list) => {
          return (
            <PlaceItems
              listItem={list}
              key={list.id}
              currentUser={currentUser}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default PlaceListing;
