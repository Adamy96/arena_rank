"use client";

import React from "react";
import Image from "next/image";
// import Lottie from "lottie-react";
import styles from "./first.styles.module.scss";
import { Content } from "../Content";
// import frame1 from "./frame1.json";

const First: React.FC<any> = ({ player, className }) => {
  return (
    <div className={`${styles.first}${className ? ` ${className}` : ""}`}>
      {/* <Lottie animationData={frame1} loop={true} /> */}
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
