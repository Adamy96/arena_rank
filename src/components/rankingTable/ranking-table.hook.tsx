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
      .slice(3)
      .map((player, idx) => [
        <Player
          key={idx}
          icon={player.profile_icon_id}
          rank={player.colocacao}
          user={player.riot_id}
        />,
        <Rank key={idx} points={player.pontuacao} />,
        <Winrate
          key={idx}
          percentage={player.winrate}
          wins={player.wins}
          losses={player.losses}
        />,
        <p key={idx}>null</p>,
        <ChampionList
          key={idx}
          championIds={player.last_games}
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
