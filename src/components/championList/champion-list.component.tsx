import Image from "next/image";
import type { IChampionListProps } from "./champion-list.interface";
import styles from "./champion-list.styles.module.scss";

const LastChampions: React.FC<IChampionListProps> = ({
  championIds,
  displayMax,
  size,
}) => {
  const displayCount = displayMax ? displayMax : championIds.length;

  if (!Array.isArray(championIds)) return null;

  return (
    <div className={styles.championList}>
      {championIds.slice(0, displayCount).map((championId, idx) => (
        <Image
          key={idx}
          width={size}
          height={size}
          alt="Emblema do ranking (challanger)"
          src={`https://cdn.communitydragon.org/15.6.1/champion/${championId}/square`}
        />
      ))}
    </div>
  );
};

export default LastChampions;
