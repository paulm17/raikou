import React from "react";
import { useFocusReturn, useMergedRef } from "@raikou/hooks";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  rem,
  closeOnEscape,
  Factory,
} from "@raikou/core";
import { OptionalPortal } from "../../../Portal/src";
import { Transition } from "../../../Transition/src";
import { FocusTrap } from "../../../FocusTrap/src";
import { FloatingArrow } from "../../../Floating/src";
import type { PopoverStylesNames } from "../Popover";
import { usePopoverContext } from "../Popover.context";

export interface PopoverDropdownProps
  extends BoxProps,
    CompoundStylesApiProps<PopoverDropdownFactory>,
    ElementProps<"div"> {}

export type PopoverDropdownFactory = Factory<{
  props: PopoverDropdownProps;
  ref: HTMLDivElement;
  stylesNames: PopoverStylesNames;
  compound: true;
}>;

const defaultProps: Partial<PopoverDropdownProps> = {};

export const PopoverDropdown = factory<PopoverDropdownFactory>(
  (_props, ref) => {
    const props = useProps("PopoverDropdown", defaultProps, _props);
    const {
      className,
      style,
      vars,
      children,
      onKeyDownCapture,
      variant,
      classNames,
      styles,
      ...others
    } = props;

    const ctx = usePopoverContext();

    const returnFocus = useFocusReturn({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus,
    });

    const accessibleProps = ctx.withRoles
      ? {
          "aria-labelledby": ctx.getTargetId(),
          id: ctx.getDropdownId(),
          role: "dialog",
          tabIndex: -1,
        }
      : {};

    const mergedRef = useMergedRef(ref, ctx.floating);

    if (ctx.disabled) {
      return null;
    }

    return (
      <OptionalPortal {...ctx.portalProps} withinPortal={ctx.withinPortal}>
        <Transition
          mounted={ctx.opened}
          {...ctx.transitionProps}
          transition={ctx.transitionProps?.transition || "fade"}
          duration={ctx.transitionProps?.duration ?? 150}
          keepMounted={ctx.keepMounted}
          exitDuration={
            typeof ctx.transitionProps?.exitDuration === "number"
              ? ctx.transitionProps.exitDuration
              : ctx.transitionProps?.duration
          }
        >
          {(transitionStyles) => (
            <FocusTrap active={ctx.trapFocus}>
              <Box
                {...accessibleProps}
                {...others}
                variant={variant}
                ref={mergedRef}
                onKeyDownCapture={closeOnEscape(ctx.onClose, {
                  active: ctx.closeOnEscape,
                  onTrigger: returnFocus,
                  onKeyDown: onKeyDownCapture,
                })}
                data-position={ctx.placement}
                {...ctx.getStyles("dropdown", {
                  className,
                  props,
                  classNames,
                  styles,
                  style: [
                    {
                      ...transitionStyles,
                      zIndex: ctx.zIndex,
                      top: ctx.y ?? 0,
                      left: ctx.x ?? 0,
                      width:
                        ctx.width === "target" ? undefined : rem(ctx.width),
                    },
                    style,
                  ],
                })}
              >
                {children}

                <FloatingArrow
                  ref={ctx.arrowRef}
                  arrowX={ctx.arrowX}
                  arrowY={ctx.arrowY}
                  visible={ctx.withArrow}
                  position={ctx.placement}
                  arrowSize={ctx.arrowSize}
                  arrowRadius={ctx.arrowRadius}
                  arrowOffset={ctx.arrowOffset}
                  arrowPosition={ctx.arrowPosition}
                  {...ctx.getStyles("arrow", {
                    props,
                    classNames,
                    styles,
                  })}
                />
              </Box>
            </FocusTrap>
          )}
        </Transition>
      </OptionalPortal>
    );
  },
);

PopoverDropdown.displayName = "@raikou/core/PopoverDropdown";
