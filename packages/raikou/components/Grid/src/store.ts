import { GetStylesApi } from "@raikou/core";
import type { GridFactory } from "./Grid";
import { create } from "zustand";

interface GridContextValue {
  getStyles: GetStylesApi<GridFactory> | any;
  grow: boolean | undefined;
  columns: number;
}

export const useStore = create<GridContextValue>(() => ({
  getStyles: undefined,
  grow: false,
  columns: 12,
}));
