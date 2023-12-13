import { GetStylesApi } from "@raikou/core";
import { createOptionalContext } from "../../_utils";
import type { ColorPickerFactory } from "./ColorPicker";

interface ColorPickerContextValue {
  getStyles: GetStylesApi<ColorPickerFactory>;
}

export const [ColorPickerProvider, useColorPickerContext] =
  createOptionalContext<ColorPickerContextValue>(null);
