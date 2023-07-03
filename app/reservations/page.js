import { ClientRender } from "../components/ClientRender";
import { EmptyData } from "../components/EmptyData";
import {
  ReservationsListing,
} from "../components/ReservationsList";
import getReservations from "../actions/getReservations";
import getUser from "../actions/getUser";

async function TripsPage() {
  const currentUser = await getUser();
  const reservations = await getReservations({ authorId: currentUser?.id });

  if (!currentUser) {
    return (
      <ClientRender>
        <EmptyData
          classes="max-wrapper-height"
          heading="Not Authorized"
          paragraph="Please login to add trips"
          showReset={true}
          buttonTitle={"Go to Home Page"}
        />
      </ClientRender>
    );
  }

  return (
    <ClientRender>
      {reservations.length != 0 ? (
          <ReservationsListing
            currentUser={currentUser}
            reservations={reservations}
          />
      ) : (
        <EmptyData
          classes="max-wrapper-height"
          heading="No reservations found"
          paragraph="Looks like you have'nt any reservations."
          showReset={false}
        />
      )}
    </ClientRender>
  );
}

export default TripsPage;
