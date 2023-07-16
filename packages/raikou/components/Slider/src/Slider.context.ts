import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../utils";

export type SliderStylesNames =
  | "root"
  | "label"
  | "thumb"
  | "trackContainer"
  | "track"
  | "bar"
  | "markWrapper"
  | "mark"
  | "markLabel";

export type SliderCssVariables = {
  root:
    | "--slider-size"
    | "--slider-color"
    | "--slider-thumb-size"
    | "--slider-radius";
};

export type SliderVariant = string;

interface SliderContextValue {
  getStyles: GetStylesApi<{
    stylesNames: SliderStylesNames;
    props: any;
    ref: any;
    vars: any;
    variant: any;
  }>;
}

export const [SliderProvider, useSliderContext] =
  createSafeContext<SliderContextValue>("SliderProvider was not found in tree");
