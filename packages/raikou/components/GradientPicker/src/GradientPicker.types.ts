import { Dispatch, SetStateAction } from "react";

// Color
export type ColorPickerType = "solid" | "gradient";
export type ColorFormat = "hex" | "rgba" | "hsva" | "hsla" | "cmyk";

// Gradient
export type SetNumber = Dispatch<SetStateAction<number>>;

export type GradientType = "linear" | "radial" | "conic";
export type GradientExtent =
  | "closest-side"
  | "closest-corner"
  | "farthest-side"
  | "farthest-corner";
export type GradientShape = "ellipse" | "circle" | "size";
export type GradientMeasurementType = "left" | "top" | "width" | "height";
export type GradientMeasurement = "%" | "px";
export type GradientColor = {
  id: string;
  color: string;
  hex: string;
  opacity: number;
  position: number;
  preview: { background: string };
  rgb: Array<number>;
  unit: GradientMeasurement;
  value: Array<number>;
};
export type GradientStop = {
  id: string;
  color: string | undefined;
  loc: number;
};
export type GradientHint = {
  position: number;
  percentage: number;
};
export type GradientPosition = {
  value: number;
  unit: GradientMeasurement;
};
export type GradientSize = {
  value: number;
  unit: GradientMeasurement;
};

export type GradientObj = {
  angle: number;
  colors: Array<GradientColor>;
  extent: GradientExtent;
  hints: Array<GradientHint>;
  positions: { x: GradientPosition; y: GradientPosition };
  repeating: boolean;
  shape: GradientShape;
  sizes: { x: GradientSize; y: GradientSize };
  type: GradientType;
};
export type SetGradient = Dispatch<SetStateAction<GradientObj>>;
