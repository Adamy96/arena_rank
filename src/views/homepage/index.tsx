import { PlayerRankCard, RankingTable } from "@/components";
import { fetchPlayers } from "@/services";
import styles from "./styles.module.scss";

const Homepage = async () => {
  const playersData = await fetchPlayers();

  const getColor = (idx: number) => {
    if (idx === 0) return styles.first;
    if (idx === 1) return styles.second;
    return styles.third;
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <div className={styles.test}></div>

        <div className={styles.rankingContainer}>
          <div className={styles.topPlayers}>
            {playersData.players.slice(0, 3).map((player, idx) => (
              <PlayerRankCard
                key={idx}
                icon={player.profile_icon_id}
                points={player.pontuacao}
                rank={player.colocacao}
                user={player.riot_id}
                winrate={player.winrate}
                wins={player.wins}
                losses={player.losses}
                lastChampions={player.last_games}
                className={getColor(idx)}
              />
            ))}
          </div>

          <RankingTable players={playersData.players} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
