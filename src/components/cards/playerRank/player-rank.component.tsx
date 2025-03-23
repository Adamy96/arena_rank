"use client";

import Image from "next/image";
import { ChampionList } from "@/components";
import type { IPlayerRankProps } from "./player-rank.interface";
import { useWindowSize } from "@/hooks";
import styles from "./player-rank.styles.module.scss";
import { userUtils } from "@/utils";

const PlayerRankCard: React.FC<IPlayerRankProps> = ({
  rank,
  points,
  icon,
  user,
  wins,
  losses,
  winrate,
  lastChampions = [],
  className,
}) => {
  const { isDesktop } = useWindowSize();

  return (
    <div
      className={`${styles.playerRankCard}${className ? ` ${className}` : ""}`}
    >
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
        <div className={styles.rank}></div>
      </div>
      <div className={styles.middle}>
        <div className={styles.ladderPoints}>
          <Image
            width={isDesktop ? 40 : 32}
            height={isDesktop ? 40 : 32}
            alt="Emblema do ranking (challanger)"
            src="https://dpm.lol/rank/CHALLENGER_SMALL.webp"
          />
          <p>{points} LP</p>
        </div>
        <div className={styles.matches}>
          <p>
            <strong>{wins}</strong> W - <strong>{losses}</strong> L{" "}
            <strong>({winrate}%)</strong>
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.gameCount}>
          <p>{wins + losses}</p>
          <span>jogos</span>
        </div>
        <ChampionList championIds={lastChampions} size={32} displayMax={4} />
        <div className={styles.averagePlacement}>
          <p>null</p>
          <span>média</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerRankCard;
