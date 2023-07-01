"use client";
import { Grid, Container, useMediaQuery } from "@chakra-ui/react";
import { PlaceItems } from "../PlaceItems";

// export const dynamic = "force-dynamic";
function ReservationsListing(props) {
  const { reservations = [], currentUser } = props;
  const [isSmallThan1600] = useMediaQuery("(max-width: 1600px)");
  return (
    <Container maxW={"container.2xl"}>
      {" "}
      <Grid
        as="div"
        templateColumns={`repeat(${isSmallThan1600 ? 4 : 5}, 1fr)`}
        gap={-2}
        rowGap={5}
        className="max-wrapper-height"
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
    </Container>
  );
}

export default ReservationsListing;
