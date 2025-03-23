import styles from "./winrate.styles.module.scss";

const useWinrate = () => {
  const getBackgroundClass = (winrate: number) => {
    if (winrate <= 50) return styles.low;
    if (winrate <= 65) return styles.medium;
    if (winrate <= 80) return styles.high;
    return styles.ultra;
  };

  return {
    getBackgroundClass,
  };
};

export default useWinrate;
