"use client";

import styles from "./header.styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <button onClick={() => alert("Under development")}>
        Adicionar jogador
      </button>
    </header>
  );
};

export default Header;
