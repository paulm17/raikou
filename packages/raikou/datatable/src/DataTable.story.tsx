import React from "react";
import { DataTable } from ".";
import companies from "./companies.json";

export default { title: "DataTable" };

export function Usage() {
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
