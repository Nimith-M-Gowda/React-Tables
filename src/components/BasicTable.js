import React, { useMemo } from "react";

import { useTable } from "react-table";

import DATA from "../utils/MOCK_DATA.json";
import COLUMNS from "../utils/Columns";
import "../styles/BasicTable.css";

function BasicTable(props) {
  const memoizedColumn = useMemo(() => COLUMNS, []);
  const memoizedData = useMemo(() => DATA, []);

  const TableInstance = useTable({
    columns: memoizedColumn,
    data: memoizedData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    TableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        {/* thead */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        {/* tbody */}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BasicTable;
