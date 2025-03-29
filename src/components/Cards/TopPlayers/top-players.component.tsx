"use client";

import React from "react";
import styles from "./top-players.styles.module.scss";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";

const TopPlayers: React.FC<any> = ({ players, className }) => {
  return (
    <div className={`${styles.topPlayers}${className ? ` ${className}` : ""}`}>
      <Second player={players[1]} />
      <First player={players[0]} />
      <Third player={players[2]} />
    </div>
  );
};

export default TopPlayers;
