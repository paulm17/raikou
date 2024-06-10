import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import {
  ColorPickerType,
  GradientObj,
  GradientType,
} from "./GradientPicker.types";
import type { GradientPickerFactory } from "./GradientPicker";
import { Dispatch, SetStateAction } from "react";
import {
  ColorFormat,
  HsvaColor,
} from "../../ColorPicker/src/ColorPicker.types";

interface GradientPickerContext {
  type: ColorPickerType;
  color: HsvaColor | undefined;
  formatValue?: ColorFormat;
  gradient: GradientObj | undefined;
  gradientTypes: GradientType[];
  isOpen: boolean;
  isLinearActive: boolean;
  activeStopIndex: number;
  movingStopIndex: number;
  control: HTMLElement | null;
  dropdown: HTMLElement | null;
  getStyles: GetStylesApi<GradientPickerFactory>;
  onChange(value: string): void;
  setColor: Dispatch<SetStateAction<HsvaColor>>;
  setControl: Dispatch<SetStateAction<HTMLElement | null>>;
  setDropdown: Dispatch<SetStateAction<HTMLElement | null>>;
  setFormatValue?: Dispatch<SetStateAction<ColorFormat>>;
  setGradient: Dispatch<SetStateAction<GradientObj | undefined>>;
  setLinearActive: Dispatch<SetStateAction<boolean>>;
  setActiveStopIndex: Dispatch<SetStateAction<number>>;
  setMovingStopIndex: Dispatch<SetStateAction<number>>;
  toggleOpen: (value?: SetStateAction<boolean> | undefined) => void;
}

export const [GradientPickerProvider, useGradientPickerContext] =
  createSafeContext<GradientPickerContext>(
    "GradientPicker component was not found in the tree",
  );
