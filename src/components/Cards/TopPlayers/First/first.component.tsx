"use client";

import React from "react";
import Image from "next/image";
import styles from "./first.styles.module.scss";
import { Content } from "../Content";

const First: React.FC<any> = ({ player, className }) => {
  return (
    <div className={`${styles.first}${className ? ` ${className}` : ""}`}>
      <Image
        className={styles.bgImg}
        src="/images/common/frame1.png"
        width={400}
        height={400}
        alt=""
      />
      <Content player={player} />
    </div>
  );
};

export default First;
