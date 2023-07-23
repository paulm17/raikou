import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { ProgressRootFactory } from "./ProgressRoot/ProgressRoot";

interface ProgressContextValue {
  getStyles: GetStylesApi<ProgressRootFactory>;
}

export const [ProgressProvider, useProgressContext] =
  createSafeContext<ProgressContextValue>(
    "Progress.Root component was not found in tree",
  );
