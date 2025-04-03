import { ConsoleLogger } from "aws-amplify/utils";
// ConsoleLogger.LOG_LEVEL = "DEBUG";

const logger = new ConsoleLogger("PlayerFetchLogger");

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

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  dateStyle: "full",
  timeStyle: "medium",
});

const fetchPlayers = async (): Promise<IPlayer[]> => {
  const now = new Date();
  console.log(`Fetch players called at ${formatter.format(now)}`);
  logger.info(`Fetch players called at ${formatter.format(now)}`);

  try {
    const response = await fetch(
      "https://arenaapi.zapto.org:3002/api/Player/Ranking",
      {
        next: { tags: ["players"], revalidate: 120 },
        cache: "no-store",
      }
    );

    const textResponse = await response.text();

    if (!response.ok) {
      console.log("Fetch players !response.ok", textResponse);
      logger.error("Fetch players !response.ok", textResponse);
      throw new Error(`Error HTTP: ${response.status}`);
    }

    console.log("Fetch players response.ok:", JSON.parse(textResponse));
    logger.info("Fetch players response.ok:", JSON.parse(textResponse));
    return JSON.parse(textResponse);
  } catch (error) {
    console.log("Fetch players catch", error);
    logger.error("Fetch players catch", error);
    throw new Error("Failed to fetch players");
  }
};

export { fetchPlayers };
