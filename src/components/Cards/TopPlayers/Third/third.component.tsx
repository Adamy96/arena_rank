"use client";

import React from "react";
import Image from "next/image";
import styles from "./third.styles.module.scss";
import { Content } from "../Content";

const Third: React.FC<any> = ({ player, className }) => {
  return (
    <div className={`${styles.third}${className ? ` ${className}` : ""}`}>
      <Image
        className={styles.bgImg}
        src="/images/common/frame3.png"
        width={278}
        height={382}
        alt=""
      />
      <Content player={player} />
    </div>
  );
};

export default Third;
