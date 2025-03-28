import type { ITable } from "./table.interface";
import styles from "./table.styles.module.scss";

const Table: React.FC<ITable> = ({ header, data, className = "" }) => {
  return (
    <table className={`${styles.table}${className ? ` ${className}` : ""}`}>
      <thead>
        <tr>
          {header.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
