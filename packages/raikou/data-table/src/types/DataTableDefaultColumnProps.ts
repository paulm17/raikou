import type { DataTableColumn } from "./DataTableColumn";

export type DataTableDefaultColumnProps = Omit<
  DataTableColumn,
  "accessor" | "hidden" | "visibleMediaQuery" | "render"
>;
