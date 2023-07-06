import { ClientRender } from "../components/ClientRender";
import { EmptyData } from "../components/EmptyData";
import { PlaceListing } from "../components/PlaceListing";
import getFavoritesListing from "../actions/getFavorites";
import getUser from "../actions/getUser";

async function FavoritesPage() {
  const currentUser = await getUser();
  const favorites = []
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
      {favorites.length != 0 ? (
        <PlaceListing
          currentUser={currentUser}
          listings={favorites}
          classes={"max-wrapper-height"}
        />
      ) : (
        <EmptyData
          classes="max-wrapper-height"
          heading="No Favorites added yet"
          paragraph="Looks like you have'nt any favorite place."
          showReset={false}
        />
      )}
    </ClientRender>
  );
}

export default FavoritesPage;
