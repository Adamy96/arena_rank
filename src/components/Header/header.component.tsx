"use client";

import { Logo, SearchBar } from "@/components";
import { CollapseButton } from "./Collapse-button";
import { colors } from "@/styles/variables";
import { useWindowSize, useModals } from "@/hooks";
import styles from "./header.styles.module.scss";
import { addUser, info } from "../../../public/svgs";

const Header = () => {
  const { isDesktop } = useWindowSize();
  const { openModal } = useModals();

  return (
    <>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          {isDesktop && (
            <>
              <div className={styles.searchBarContainer}>
                {/* <SearchBar
                  onSearch={(e) => console.log(e)}
                  onClick={() => alert("Em desenvolvimento")}
                  placeholder="Nome no jogo + #tag"
                /> */}
              </div>
              <div className={styles.btnsContainer}>
                <CollapseButton
                  icon={{ src: info, width: 20, height: 20, alt: "Lupa" }}
                  backgroundColor={colors.colorMainDark}
                  color={colors.colorNeutralLightest}
                  collapsed={false}
                  size={36}
                  onClick={() => alert("Em desenvolvimento")}
                  text="Informações"
                />
                <CollapseButton
                  icon={{ src: addUser, width: 20, height: 20, alt: "Lupa" }}
                  backgroundColor={colors.colorMainDark}
                  color={colors.colorNeutralLightest}
                  collapsed={false}
                  size={36}
                  onClick={() => openModal({ modalId: "addAccount" })}
                  text="Adicionar"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.searchBarContainer}>
          {/* <SearchBar
            onSearch={(e) => console.log(e)}
            onClick={() => alert("Em desenvolvimento")}
            placeholder="Nome no jogo + #tag"
          /> */}
        </div>
        <div className={styles.btnsContainer}>
          <CollapseButton
            icon={{ src: info, width: 20, height: 20, alt: "Lupa" }}
            backgroundColor={colors.colorMainDark}
            color={colors.colorNeutralLightest}
            collapsed={true}
            size={36}
            onClick={() => alert("Em desenvolvimento")}
            text="Informações"
          />
          <CollapseButton
            icon={{ src: addUser, width: 20, height: 20, alt: "Lupa" }}
            backgroundColor={colors.colorMainDark}
            color={colors.colorNeutralLightest}
            collapsed={true}
            size={36}
            onClick={() => openModal({ modalId: "addAccount" })}
            text="Adicionar"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
