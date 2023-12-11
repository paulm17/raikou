import { GetStylesApi } from "@raikou/core";
import type { GridFactory } from "./Grid";
import createStore from "pure-store";

interface GridContextValue {
  getStyles: GetStylesApi<GridFactory> | any;
  grow: boolean | undefined;
  columns: number;
}

export const useStore = createStore<GridContextValue>({
  getStyles: undefined,
  grow: false,
  columns: 12,
});
