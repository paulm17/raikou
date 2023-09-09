import {
  BoxProps,
  ElementProps,
  RaikouColor,
  StylesApiProps,
  RaikouRadius,
} from "@raikou/core";
import { FloatingPosition } from "../../Floating/src";
import { PortalProps } from "../../Portal/src";
import type { TooltipFactory } from "./Tooltip";

export type TooltipStylesNames = "tooltip" | "arrow";
export type TooltipVariant = string;
export type TooltipCssVariables = {
  tooltip: "--tooltip-radius" | "--tooltip-bg";
};

export interface TooltipBaseProps
  extends BoxProps,
    StylesApiProps<TooltipFactory>,
    ElementProps<"div"> {
  /** Target element, must support `ref` prop and `...others` */
  children: React.ReactNode;

  /** Tooltip position relative to target element (`Tooltip` component) or mouse (`Tooltip.Floating` component) */
  position?: FloatingPosition;

  /** Key of the prop that can be used to access element ref, `ref` by default */
  refProp?: string;

  /** Tooltip content */
  label: React.ReactNode;

  /** Determines whether tooltip should be rendered within `Portal`, `true` by default */
  withinPortal?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius;

  /** Key of `theme.colors` or any valid CSS color, controls tooltip background, by default set based on current color scheme */
  color?: RaikouColor;

  /** Determines whether content should be wrapped on to the next line, `false` by default */
  multiline?: boolean;

  /** Tooltip z-index, `300` by default */
  zIndex?: React.CSSProperties["zIndex"];

  /** If set, tooltip element will not be rendered */
  disabled?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: Omit<PortalProps, "children" | "withinPortal">;
}
