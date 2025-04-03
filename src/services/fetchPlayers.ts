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

  const startTime = Date.now();

  try {
    const response = await fetch(
      "https://arenaapi.zapto.org:3002/api/Player/Ranking",
      {
        next: { tags: ["players"], revalidate: 120 },
        signal: AbortSignal.timeout(120000),
      }
    );

    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log(
      `Fetch players completed at ${formatter.format(new Date(endTime))}`
    );
    logger.info(
      `Fetch players completed at ${formatter.format(new Date(endTime))}`
    );
    logger.info(`Request duration: ${duration} ms`);

    if (!response.ok) {
      const textResponse = await response.text();
      console.log("Fetch players !response.ok", textResponse);
      logger.error("Fetch players !response.ok", textResponse);
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Fetch players response.ok`, data?.splice(0, 10));
    logger.info("Fetch players response.ok:", data?.splice(0, 10));

    return data;
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;

    logger.error(`Request failed after ${duration} ms`);
    console.log("Fetch players catch", error);
    logger.error("Fetch players catch", error);

    throw new Error("Failed to fetch players");
  }
};

export { fetchPlayers };
