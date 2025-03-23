"use client";

import { useMemo } from "react";
import { useWindowSize } from "@/hooks";
import useRankingTable from "./ranking-table.hook";
import type { RankingTableProps } from "./ranking-table.interface";
import styles from "./ranking-table.styles.module.scss";

const RankingTable: React.FC<RankingTableProps> = ({ players }) => {
  const { isDesktop } = useWindowSize();
  const { header, parseData } = useRankingTable();

  const data = useMemo(
    () => parseData(players, isDesktop),
    [players, isDesktop, parseData]
  );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        {header.map((column, index) => (
          <div key={index} className={styles.headerCell}>
            {column}
          </div>
        ))}
      </div>

      <div className={styles.tableBody}>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={styles.tableCell}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingTable;
