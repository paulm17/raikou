"use client";

import { DataTable } from "../../../../packages/raikou/datatable/dist";
import companies from "./companies.json";

export default function Page() {
  return (
    <div style={{ padding: 40 }}>
      <DataTable
        withTableBorder
        borderRadius="sm"
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
    </div>
  );
}
