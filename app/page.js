
import getListing from "./actions/getListing";
import { ClientRender } from "./components/ClientRender";
import { EmptyData } from "./components/EmptyData";

export default async function Home() {
  const listings = await getListing();

  return <ClientRender> <EmptyData/> </ClientRender>;
}
