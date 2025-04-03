import { Homepage } from "@/views";
import { fetchPlayers } from "@/services";

export const dynamic = "force-dynamic";

export default async function Home() {
  const playersData = await fetchPlayers();

  return <Homepage playersData={playersData} />;
}
