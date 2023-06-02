import getListing from "./actions/getListing";
import { ClientRender } from "./components/ClientRender";
import { EmptyData } from "./components/EmptyData";
import { PlaceListing } from "./components/PlaceListing";

export default async function Home() {
  const listings = await getListing();

  return (
    <ClientRender>
      <div className={"main-wrapper"}>
        {[].length > 0 ? (
          <PlaceListing listings={listings} />
        ) : (
          <EmptyData showReset={true} />
        )}{" "}
      </div>
    </ClientRender>
  );
}
