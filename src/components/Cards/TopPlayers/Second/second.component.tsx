"use client";

import React from "react";
import Image from "next/image";
import styles from "./second.styles.module.scss";
import { Content } from "../Content";

const Second: React.FC<any> = ({ player, className }) => {
  return (
    <div className={`${styles.second}${className ? ` ${className}` : ""}`}>
      <Image
        className={styles.bgImg}
        src="/images/common/frame2.png"
        width={278}
        height={382}
        alt=""
      />
      <Content player={player} />
    </div>
  );
};

export default Second;
