import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { TableFactory } from "./Table";

export interface TableContextValue {
  getStyles: GetStylesApi<TableFactory>;
  striped: "odd" | "even" | undefined;
  highlightOnHover: boolean | undefined;
  withColumnBorders: boolean | undefined;
  withRowBorders: boolean | undefined;
  captionSide: "top" | "bottom";
}

export const [TableProvider, useTableContext] =
  createSafeContext<TableContextValue>(
    "Table component was not found in the tree"
  );
