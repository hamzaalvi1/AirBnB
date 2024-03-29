"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Favorite } from "../Favorite";
import { PlaceInfo } from "./PlaceInfo";
import { useCountries } from "@/app/hooks";
import { PlaceContent } from "./PlaceContent";
import { PlaceReservations } from "./PlaceReservations";
import {
  Box,
  Container,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { placeItemsImageStyles } from "./styles";

function PlaceDetails(props) {
  const { listDetails, user, reservations = [] } = props;
  const [isSmallThan575] = useMediaQuery("(max-width: 575px)");
  const { getCountryByValue } = useCountries();
  const countryDetails = getCountryByValue(listDetails?.locationValue);
  const Map = dynamic(() => import("../Map"), {
    ssr: false,
  });
  return (
    <Box as="div" className="main-wrapper">
      <Container maxW={isSmallThan575 ? "100%" : "90%"}>
        <PlaceContent
          heading={listDetails?.title}
          paragraph={{
            region: countryDetails?.region,
            label: countryDetails?.label,
          }}
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
        <Grid templateColumns="57% 40%" gap={"50px"} className="grip-single">
          <GridItem>
            <PlaceInfo listDetails={listDetails} />
            <Map coords={countryDetails?.latlng} />
          </GridItem>
          <GridItem>
            <PlaceReservations
              listDetails={listDetails}
              currentUser={user}
              reservations={reservations}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default PlaceDetails;
