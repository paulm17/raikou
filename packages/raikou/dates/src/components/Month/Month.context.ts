import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../../../components/_utils";
import type { MonthFactory } from "./Month";

interface MonthContext {
  getStyles: GetStylesApi<MonthFactory>;
}

export const [MonthProvider, useMonthContext] = createSafeContext<MonthContext>(
  "Month component was not found in tree",
);
