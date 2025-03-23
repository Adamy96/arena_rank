import Image from "next/image";
import type { IPlayerRank } from "./player-rank.interface";
import styles from "./player-rank.styles.module.scss";
import { userUtils } from "@/utils";

const PlayerRankCard: React.FC<IPlayerRank> = ({
  rank,
  points,
  icon,
  user,
  wins,
  losses,
  winrate,
  lastChampions = [],
}) => {
  return (
    <div className={styles.playerRankCard}>
      <div className={styles.header}>
        <p className={styles.rank}>{rank}</p>
        <div className={styles.userContainer}>
          <Image
            width={42}
            height={42}
            alt="Emblema do ranking (challanger)"
            src={`https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/${icon}.png`}
          />
          <div className={styles.user}>
            <p>{userUtils.getNickname(user)}</p>
            <span>#{userUtils.getHashtag(user).toUpperCase()}</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles.middle}>
        <div className={styles.ladderPoints}>
          <Image
            width={32}
            height={32}
            alt="Emblema do ranking (challanger)"
            src="https://dpm.lol/rank/CHALLENGER_SMALL.webp"
          />
          <p>{points} LP</p>
        </div>
        <div className={styles.matches}>
          <p>
            <strong>{wins}</strong> W - <strong>{losses}</strong> L ({winrate}%)
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.gameCount}>
          <p>{wins + losses}</p>
          <span>jogos</span>
        </div>
        <div className={styles.lastChampions}>
          {lastChampions.slice(0, 4).map((championId, idx) => (
            <Image
              key={idx}
              width={28}
              height={28}
              alt="Emblema do ranking (challanger)"
              src={`https://cdn.communitydragon.org/15.6.1/champion/${championId}/square`}
            />
          ))}
        </div>
        <div className={styles.averagePlacement}>
          <p>6.5</p>
          <span>posição média</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerRankCard;
