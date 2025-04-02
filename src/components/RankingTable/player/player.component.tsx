"use client";

import Image from "next/image";
import type { IPlayerProps } from "./player.interface";
import { useWindowSize } from "@/hooks";
import styles from "./player.styles.module.scss";

const Player: React.FC<IPlayerProps> = ({ icon, rank, gameName, tagLine }) => {
  const { isDesktop } = useWindowSize();
  return (
    <div className={styles.player}>
      <p className={styles.rank}>{rank}</p>
      <div className={styles.container}>
        <Image
          width={isDesktop ? 32 : 28}
          height={isDesktop ? 32 : 28}
          alt="Emblema do ranking (challanger)"
          src={`https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/${icon}.png`}
        />
        <div>
          <p>{gameName}</p>
          <span>#{tagLine}</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
