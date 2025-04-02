import { RankingTable, TopPlayers } from "@/components";
import { fetchPlayers, revalidatePlayersData } from "@/services";
import styles from "./styles.module.scss";

const Homepage = async () => {
  const playersData = await fetchPlayers();

  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <div className={styles.rankingContainer}>
          <TopPlayers players={playersData.slice(0, 3)} />
          <button onClick={revalidatePlayersData} className={styles.refresh}>
            Atualizar ranking
          </button>
          <RankingTable players={playersData} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

export const revalidate = 120;
