import { Table, PlayerRankCard } from "@/components";
import { fetchPlayers } from "@/services";
import styles from "./styles.module.scss";

const Homepage = async () => {
  const playersData = await fetchPlayers();

  console.log(playersData);

  const topPlayersData = [
    {
      icon: "https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/6091.png",
      points: 2125,
      rank: 1,
      user: "CookiexT#BR1",
      winrate: 99,
      wins: 99,
    },
    {
      icon: "https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/6091.png",
      points: 1852,
      rank: 2,
      user: "Bash#BR1",
      winrate: 78,
      wins: 28,
    },
    {
      icon: "https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/6091.png",
      points: 1422,
      rank: 3,
      user: "Zikardinho#BR3",
      winrate: 74,
      wins: 22,
    },
  ];

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
