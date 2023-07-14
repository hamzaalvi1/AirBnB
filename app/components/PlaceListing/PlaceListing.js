"use client";
import { Grid, Container, useMediaQuery } from "@chakra-ui/react";
import { PlaceItems } from "../PlaceItems";

// export const dynamic = "force-dynamic";
function PlaceListing(props) {
  const { listings, currentUser, classes } = props;
  const [isSmallThan1600] = useMediaQuery("(max-width: 1600px)");
  return (
    <Container maxW={"container.2xl"}>
      {" "}
      <Grid
        as="div"
        // templateColumns={`repeat(${isSmallThan1600 ? 4 : 5}, 1fr)`}
        gap={-2}
        rowGap={5}
        className={classes ? classes : ""}
      >
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
