import getListing from "./actions/getListing";
import getUser from "./actions/getUser";
import { ClientRender } from "./components/ClientRender";
import { EmptyData } from "./components/EmptyData";
import { PlaceListing } from "./components/PlaceListing";

export default async function Home(props) {
  const { searchParams } = props;
  const currentUser = await getUser();
  const listings = await getListing({
    category: searchParams?.category ? searchParams?.category : "",
    locationValue: searchParams?.locationValue
      ? searchParams?.locationValue
      : "",
    bathroomCount: searchParams?.bathroomCount
      ? searchParams?.bathroomCount
      : "",
    roomCount: searchParams?.roomCount ? searchParams?.roomCount : "",
    guestCount: searchParams?.guestCount ? searchParams?.guestCount : "",
    startDate: searchParams?.startDate ? searchParams?.startDate : "",
    endDate: searchParams?.endDate ? searchParams?.endDate : "",
  });

  return (
    <ClientRender>
      <div className={"main-wrapper"}>
        {listings.length > 0 ? (
          <PlaceListing
            listings={listings}
            currentUser={currentUser}
            classes={"grid-wrapper"}
          />
        ) : (
          <EmptyData showReset={true} classes="max-wrapper-height" />
        )}{" "}
      </div>
    </ClientRender>
  );
}
