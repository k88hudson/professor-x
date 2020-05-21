import React from "react";
import styles from "./Table.css";

interface TableProps {
  data?: Array<{ [key: string]: React.ReactNode }>;
  columns?: string[];
  children?: React.ReactNode;
  wide?: boolean;
}

export default ({
  columns: customColumns,
  data,
  wide,
  children,
}: TableProps) => {
  const columns = customColumns || (data && Object.keys(data[0]));
  let className = styles.table;
  if (wide) className += ` ${styles.wide}`;

  return (
    <table className={className}>
      {columns && (
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
      )}
      {data && columns && (
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
      {children}
    </table>
  );
};
