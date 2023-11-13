import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import { GradientObj } from "./GradientPicker.types";
import type { GradientPickerFactory } from "./GradientPicker";
import { HsvaColor } from "colord";
import { Dispatch, SetStateAction } from "react";

interface GradientPickerContext {
  color: HsvaColor | undefined;
  gradient: GradientObj | undefined;
  isOpen: boolean;
  activeStopIndex: string;
  control: HTMLElement | null;
  dropdown: HTMLElement | null;
  setColor: Dispatch<SetStateAction<HsvaColor | undefined>>;
  onChange(value: string): void;
  toggleOpen: (value?: SetStateAction<boolean> | undefined) => void;
  setControl: Dispatch<SetStateAction<HTMLElement | null>>;
  setDropdown: Dispatch<SetStateAction<HTMLElement | null>>;
  setGradient: Dispatch<SetStateAction<GradientObj | undefined>>;
  setActiveStopIndex: Dispatch<SetStateAction<string>>;
  getStyles: GetStylesApi<GradientPickerFactory>;
}

export const [GradientPickerProvider, useGradientPickerContext] =
  createSafeContext<GradientPickerContext>(
    "GradientPicker component was not found in the tree",
  );
