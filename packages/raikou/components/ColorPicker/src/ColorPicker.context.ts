import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../utils";
import type { ColorPickerFactory } from "./ColorPicker";

interface ColorPickerContextValue {
  getStyles: GetStylesApi<ColorPickerFactory>;
}

export const [ColorPickerProvider, useColorPickerContext] =
  createSafeContext<ColorPickerContextValue>(
    "ColorPicker component was not found in tree"
  );
