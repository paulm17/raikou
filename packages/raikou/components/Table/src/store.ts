import { GetStylesApi } from "@raikou/core";
import type { TableFactory } from "./Table";
import createStore from "pure-store";

export type TableContextValue = {
  getStyles: GetStylesApi<TableFactory> | any;
  stickyHeader: boolean | undefined;
  striped: "odd" | "even" | undefined;
  highlightOnHover: boolean | undefined;
  withColumnBorders: boolean | undefined;
  withRowBorders: boolean | undefined;
  captionSide: "top" | "bottom";
};

export const useStore = createStore<TableContextValue>({
  getStyles: undefined,
  stickyHeader: undefined,
  striped: undefined,
  highlightOnHover: undefined,
  withColumnBorders: undefined,
  withRowBorders: undefined,
  captionSide: "top",
});
