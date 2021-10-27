import React, { useMemo } from "react";

import { useTable, useSortBy } from "react-table";

import DATA from "../utils/MOCK_DATA.json";
import { COMBINED_COLUMNS } from "../utils/Columns";
import "../styles/BasicTable.css";

function BasicTable(props) {
  const memoizedColumn = useMemo(() => COMBINED_COLUMNS, []);
  const memoizedData = useMemo(() => DATA, []);

  const TableInstance = useTable(
    {
      columns: memoizedColumn,
      data: memoizedData,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = TableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        {/* thead */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <br />
                  <span style={{ fontSize: 10 }}>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? "sort desc"
                        : "sort inc"
                      : "click to sort"}
                  </span>
                </th>
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <th {...column.getFooterProps()}>{column.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default BasicTable;
