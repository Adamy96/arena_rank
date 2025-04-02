import React from "react";
import Image from "next/image";
import { ChampionList } from "@/components";
import { Winrate } from "@/components/RankingTable/winrate";
import styles from "./content.styles.module.scss";
import type { IChampionPlayed } from "@/services";

const Content: React.FC<any> = ({ player }) => {
  return (
    <div className={styles.content}>
      <div className={styles.userContainer}>
        <Image
          width={60}
          height={60}
          alt="Emblema do ranking (challanger)"
          src={`https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/${player.profileIconId}.png`}
        />
        <div className={styles.user}>
          <p>{player.gameName.replace(/%20/gi, " ")}</p>
          <span>#{player.tagLine}</span>
        </div>
      </div>
      <div className={styles.mostPlayed}>
        <p>Campeões mais jogados</p>
        <ChampionList
          championIds={player.matchStats.championsPlayed?.map(
            (data: IChampionPlayed) => data.championId
          )}
          size={32}
          displayMax={3}
        />
      </div>
      <div className={styles.ladderPoints}>
        <p>{player.pdl} LP</p>
      </div>

      <div className={styles.winrateContainer}>
        <Winrate
          losses={player.matchStats.loss}
          percentage={player.matchStats.winRate}
          wins={player.matchStats.win}
        />
      </div>
    </div>
  );
};

export default Content;
