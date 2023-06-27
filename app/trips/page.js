import { ClientRender } from "../components/ClientRender";
import { EmptyData } from "../components/EmptyData";
import getReservations from "../actions/getReservations";
import getUser from "../actions/getUser";

async function TripsPage() {
  const currentUser = await getUser();
  const reservations = await getReservations({ userId: currentUser?.id });

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
      {console.log(reservations,"reservations")}  
      {reservations.length != 0 ? (
        <>HELLO WORLD</>
      ) : (
        <EmptyData
          classes="max-wrapper-height"
          heading="No trips found"
          paragraph="Looks like you have'nt reserved any trips."
          showReset={true}
          buttonTitle={"Book Your Trips"}
        />
      )}
    </ClientRender>
  );
}

export default TripsPage;
