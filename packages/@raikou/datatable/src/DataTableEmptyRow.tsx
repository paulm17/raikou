import { dataTableEmptyRowStyle } from './DataTableEmptyRow.css';

export function DataTableEmptyRow() {
  return (
    <tr className={dataTableEmptyRowStyle}>
      <td />
    </tr>
  );
}
