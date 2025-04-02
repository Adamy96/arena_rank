import { revalidateTag } from "next/cache";

export interface IChampionPlayed {
  championId: string;
  championName: string;
}

export interface IMatchStats {
  win: number;
  loss: number;
  lastProcessedMatch: string;
  recentGames: string[];
  averagePlacement: number;
  championsPlayed: IChampionPlayed[];
  totalGames: number;
  winRate: number;
}

export interface IPlayer {
  id: string;
  puuid: string;
  tagLine: string;
  gameName: string;
  profileIconId: number;
  pdl: number;
  matchStats: IMatchStats;
  lastUpdate: string | null;
  trackingEnabled: boolean;
  dateAdded: string;
  rankPosition: number;
}

const fetchPlayers = async (): Promise<IPlayer[]> => {
  "use server";

  try {
    const response = await fetch(
      "https://arenaapi.zapto.org:3002/api/Player/Ranking",
      {
        next: { tags: ["players"], revalidate: 120 },
      }
    );
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch {
    throw new Error("Failed to fetch players");
  }
};

const revalidatePlayersData = async () => {
  "use server";
  await revalidateTag("players");
};

export { fetchPlayers, revalidatePlayersData };
