import {
  RaikouShadow,
  Styles,
  ClassNames,
  RaikouRadius,
  GetStylesApi,
} from "@raikou/core";
import { createSafeContext } from "../../_utils";
import { FloatingPosition, ArrowPosition } from "../../Floating/src";
import { TransitionOverride } from "../../Transition/src";
import { PortalProps } from "../../Portal/src";
import { PopoverWidth } from "./Popover.types";
import type { PopoverFactory } from "./Popover";

interface PopoverContext {
  x: number;
  y: number;
  arrowX: number;
  arrowY: number;
  arrowRef: React.RefObject<HTMLDivElement>;
  opened: boolean;
  transitionProps?: TransitionOverride;
  reference(node: HTMLElement): void;
  floating(node: HTMLElement): void;
  width?: PopoverWidth;
  withArrow: boolean | undefined;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  trapFocus: boolean | undefined;
  placement: FloatingPosition;
  withinPortal: boolean | undefined;
  portalProps?: Omit<PortalProps, "children">;
  closeOnEscape: boolean | undefined;
  zIndex: React.CSSProperties["zIndex"];
  radius?: RaikouRadius | (string & {}) | number | undefined;
  shadow?: RaikouShadow | (string & {}) | undefined;
  onClose?(): void;
  getDropdownId(): string;
  getTargetId(): string;
  controlled: boolean;
  onToggle(): void;
  withRoles: boolean | undefined;
  targetProps: Record<string, any>;
  disabled: boolean | undefined;
  returnFocus: boolean | undefined;
  classNames: ClassNames<PopoverFactory> | undefined;
  styles: Styles<PopoverFactory> | undefined;
  unstyled: boolean | undefined;
  __staticSelector: string;
  variant: string | undefined;
  keepMounted: boolean | undefined;
  getStyles: GetStylesApi<PopoverFactory>;
}

export const [PopoverContextProvider, usePopoverContext] =
  createSafeContext<PopoverContext>(
    "Popover component was not found in the tree"
  );
