import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
import getUser from "@/app/actions/getUser";

import { ClientRender } from "@/app/components/ClientRender";
import { PlaceDetails } from "@/app/components/PlaceDetails";

export async function generateMetadata({ params }) {
  const listDetails = await getListingById(params.listingId);

  return {
    title: listDetails.title,
    description: listDetails.description,
  };
}

async function ListingPage(props) {
  const { params } = props;
  const listDetails = await getListingById(params.listingId);
  const reservations = await getReservations(params);
  const currentUser = await getUser();
  return (
    <ClientRender>
      <PlaceDetails
        user={currentUser}
        listDetails={listDetails}
        reservations={reservations}
      />
    </ClientRender>
  );
}

export default ListingPage;
