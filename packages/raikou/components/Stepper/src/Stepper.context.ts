import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { StepperFactory } from "./Stepper";

interface StepperContextValue {
  getStyles: GetStylesApi<StepperFactory>;
  orientation: "horizontal" | "vertical" | undefined;
  iconPosition: "left" | "right" | undefined;
}

export const [StepperProvider, useStepperContext] =
  createSafeContext<StepperContextValue>(
    "Stepper component was not found in tree",
  );
