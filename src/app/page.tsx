import { Homepage } from "@/views";
import { fetchPlayers } from "@/services";

export const revalidate = 120;

export default async function Home() {
  const playersData = await fetchPlayers();

  return <Homepage playersData={playersData} />;
}
