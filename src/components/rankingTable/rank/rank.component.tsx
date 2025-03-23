import type { IRankProps } from "./rank.interface";
import styles from "./rank.styles.module.scss";

const Rank: React.FC<IRankProps> = ({ points }) => {
  return (
    <div className={styles.rank}>
      <p>{points} LP</p>
    </div>
  );
};

export default Rank;
