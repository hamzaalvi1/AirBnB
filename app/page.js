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
  });

  return (
    <ClientRender>
      <div className={"main-wrapper"}>
        {listings.length > 0 ? (
          <PlaceListing listings={listings} currentUser={currentUser} />
        ) : (
          <EmptyData showReset={true} />
        )}{" "}
      </div>
    </ClientRender>
  );
}
