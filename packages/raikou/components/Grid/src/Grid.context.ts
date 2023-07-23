import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { GridFactory } from "./Grid";

interface GridContextValue {
  getStyles: GetStylesApi<GridFactory>;
  grow: boolean | undefined;
  columns: number;
}

export const [GridProvider, useGridContext] =
  createSafeContext<GridContextValue>("Grid component was not found in tree");
