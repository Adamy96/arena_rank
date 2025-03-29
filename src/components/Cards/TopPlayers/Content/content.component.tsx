import React from "react";
import Image from "next/image";
import { ChampionList } from "@/components";
import { userUtils } from "@/utils";
import { Winrate } from "@/components/RankingTable/winrate";
import styles from "./content.styles.module.scss";

const Content: React.FC<any> = ({ player }) => {
  return (
    <div className={styles.content}>
      <div className={styles.userContainer}>
        <Image
          width={60}
          height={60}
          alt="Emblema do ranking (challanger)"
          src={`https://ddragon.leagueoflegends.com/cdn/15.6.1/img/profileicon/${player.profile_icon_id}.png`}
        />
        <div className={styles.user}>
          <p>{userUtils.getNickname(player.riot_id)}</p>
          <span>#{userUtils.getHashtag(player.riot_id).toUpperCase()}</span>
        </div>
      </div>
      <div className={styles.mostPlayed}>
        <p>Campeões mais jogados</p>
        <ChampionList
          championIds={player.last_games}
          size={32}
          displayMax={3}
        />
      </div>
      <div className={styles.ladderPoints}>
        <p>{player.pontuacao} LP</p>
      </div>

      <div className={styles.winrateContainer}>
        <Winrate
          losses={player.losses}
          percentage={player.winrate}
          wins={player.wins}
        />
      </div>
    </div>
  );
};

export default Content;
