"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./logo.styles.module.scss";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/common/logo.png"
      fill={true}
      alt={"Arena rank logo"}
      className={styles.logo}
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
