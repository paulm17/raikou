import {
  GradientExtent,
  GradientMeasurement,
  GradientPosition,
} from "../../GradientPicker.types";

export type Position = { x: GradientPosition; y: GradientPosition };
export type ColorPosition = { value: number; unit: GradientMeasurement };

export type GradientProps = {
  angle?: number;
  colorPosition?: ColorPosition;
  extent?: GradientExtent;
  position?: Position;
  setAngle?: (value: number) => void;
  setColorPosition?: (value: ColorPosition) => void;
  setExtent?: (value: GradientExtent) => void;
  setPosition?: (value: Position) => void;
};
