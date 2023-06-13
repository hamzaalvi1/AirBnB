import getListingById from "@/app/actions/getListingById";
import getUser from "@/app/actions/getUser";

import { ClientRender } from "@/app/components/ClientRender";
import { PlaceDetails } from "@/app/components/PlaceDetails";

async function ListingPage(props) {
  const { params } = props;
  const listDetails = await getListingById(params.listingId);
  const currentUser = await getUser();
  return (
    <ClientRender>
      <PlaceDetails listDetails={listDetails} user={currentUser} />
    </ClientRender>
  );
}

export default ListingPage;
