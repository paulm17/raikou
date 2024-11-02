import { DataTable as RaikouDatatable } from "@raikou/datatable";
import companies from "./data.json";

export function DataTable() {
  return (
    <RaikouDatatable
      withTableBorder
      noHeader
      withColumnBorders
      striped
      highlightOnHover
      columns={[
        { accessor: "name" },
        { accessor: "streetAddress" },
        { accessor: "city" },
        { accessor: "state" },
      ]}
      records={companies}
    />
  );
}
