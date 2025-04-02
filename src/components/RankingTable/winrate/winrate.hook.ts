import styles from "./winrate.styles.module.scss";

const useWinrate = () => {
  const getBackgroundClass = (winrate: number) => {
    if (winrate <= 0.5) return styles.low;
    if (winrate <= 0.65) return styles.medium;
    if (winrate <= 0.8) return styles.high;
    return styles.ultra;
  };

  return {
    getBackgroundClass,
  };
};

export default useWinrate;
