"use client";
import Image from "next/image";
import { Box, Container,Grid,GridItem } from "@chakra-ui/react";
import { PlaceContent } from "./PlaceContent";
import { PlaceInfo } from "./PlaceInfo";
import { Favorite } from "../Favorite";
import { placeItemsImageStyles } from "./styles";
function PlaceDetails(props) {
  const { listDetails, user } = props;
  console.log(listDetails);
  return (
    <Box as="div" className="main-wrapper">
      <Container maxW={"90%"}>
        <PlaceContent
          heading={listDetails?.title}
          paragraph={listDetails?.locationValue}
        />
        <Box as="div" sx={placeItemsImageStyles}>
          <Image
            src={listDetails?.imageSrc}
            alt={listDetails?.id}
            fetchPriority={"low"}
            style={{ objectFit: "fill" }}
            fill
            // width={0}
            // height={0}
            // sizes="100vw"
            // style={{ width: '100%', height: '650px' }} // optional
          />
          <Favorite favoriteId={listDetails?.id} currentUser={user} />
        </Box>
        <Grid templateColumns='repeat(2, 1fr)' gap={5}>
        <PlaceInfo listDetails={listDetails} />
        </Grid>
      </Container>
    </Box>
  );
}

export default PlaceDetails;
