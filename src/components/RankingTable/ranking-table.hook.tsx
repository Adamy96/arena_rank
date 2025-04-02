import type { IPlayer } from "@/services/fetchPlayers";
import { Player } from "./player";
import { Rank } from "./rank";
import { Winrate } from "./winrate";
import { ChampionList } from "@/components";

const useRankingTable = () => {
  const parseData = (
    players: IPlayer[],
    isDesktop: boolean | undefined
  ): React.JSX.Element[][] => {
    return players
      .slice(isDesktop ? 3 : 0)
      .map((player, idx) => [
        <Player
          key={idx}
          icon={player.profileIconId}
          rank={player.rankPosition}
          gameName={player.gameName.replace(/%20/gi, " ")}
          tagLine={player.tagLine}
        />,
        <Rank key={idx} points={player.pdl} />,
        <Winrate
          key={idx}
          percentage={player.matchStats.winRate}
          wins={player.matchStats.win}
          losses={player.matchStats.loss}
        />,
        <p key={idx}>null</p>,
        <ChampionList
          key={idx}
          championIds={player.matchStats.championsPlayed?.map(
            (data) => +data.championId
          )}
          size={isDesktop ? 28 : 24}
          displayMax={4}
        />,
      ]);
  };

  return {
    header: ["Jogador", "Rank", "Winrate", "Média", "Últimos champions"],
    parseData,
  };
};

export default useRankingTable;
