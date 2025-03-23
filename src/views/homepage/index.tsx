import { Table, PlayerRankCard } from "@/components";
import { fetchPlayers } from "@/services";
import styles from "./styles.module.scss";

const Homepage = async () => {
  const playersData = await fetchPlayers();

  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
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
              />
            ))}
          </div>

          <Table
            header={["Posição", "Jogador", "PDL", "Winrate"]}
            data={[
              ["4", "CookiexT", "99%", <h1>Testando</h1>],
              ["5", "Zikardinho", "69%", "2280PDL"],
              ["4", "CookiexT", "69%", "2280PDL"],
              ["4", "CookiexT", "69%", "2280PDL"],
              ["4", "CookiexT", "69%", "2280PDL"],
              ["4", "CookiexT", "69%", "2280PDL"],
              ["4", "CookiexT", "69%", "2280PDL"],
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
