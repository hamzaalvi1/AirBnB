"use client";
import { Grid, Container, useMediaQuery,Box } from "@chakra-ui/react";
import { ReservationContent } from "../ReservationsList";
import { PlaceItems } from "../PlaceItems";

// export const dynamic = "force-dynamic";
function ReservationsListing(props) {
  const { reservations = [], currentUser } = props;
  const [isSmallThan1600] = useMediaQuery("(max-width: 1600px)");
  return (
    <Container maxW={"container.2xl"}>
      {" "}
      <Box as="div" className="max-wrapper-height">
        <ReservationContent
          heading={"Your Trips"}
          text={"Where you want to go...."}
        />
        <Grid
          as="div"
          templateColumns={`repeat(${isSmallThan1600 ? 4 : 5}, 1fr)`}
          gap={-2}
          rowGap={5}
          className="reservation-grid"
        >
          {reservations.map((list) => {
            let reservation = {
              id: list?.listingId,
              endDate: list?.endDate?.toDateString(),
              startDate: list?.startDate.toDateString(),
              totalPrice: list?.totalPrice,
              reservationId: list?.id,
              title: list?.listing?.title,
              imageSrc: list?.listing?.imageSrc,
              locationValue: list?.listing?.locationValue,
              category: list?.listing?.category,
            };
            return (
              <PlaceItems
                listItem={reservation}
                key={list.id}
                currentUser={currentUser}
                reservedCheck={true}
              />
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default ReservationsListing;
