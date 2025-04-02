import type { IWinrateProps } from "./winrate.interface";
import useWinrate from "./winrate.hook";
import styles from "./winrate.styles.module.scss";

const Winrate: React.FC<IWinrateProps> = ({ wins, losses, percentage }) => {
  const { getBackgroundClass } = useWinrate();

  return (
    <div className={styles.winrate}>
      <p>
        <strong>{wins}</strong> W - <strong>{losses}</strong> L
      </p>
      <div className={`${styles.percentage} ${getBackgroundClass(percentage)}`}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default Winrate;
