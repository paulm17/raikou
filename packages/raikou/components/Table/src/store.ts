import { GetStylesApi } from "@raikou/core";
import type { TableFactory } from "./Table";
import { create } from "zustand";

export type TableContextValue = {
  getStyles: GetStylesApi<TableFactory> | any;
  striped: "odd" | "even" | undefined;
  highlightOnHover: boolean | undefined;
  withColumnBorders: boolean | undefined;
  withRowBorders: boolean | undefined;
  captionSide: "top" | "bottom";
};

export const useStore = create<TableContextValue>(() => ({
  getStyles: undefined,
  striped: undefined,
  highlightOnHover: undefined,
  withColumnBorders: undefined,
  withRowBorders: undefined,
  captionSide: "top",
}));
