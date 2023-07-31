import React, { forwardRef } from "react";
import cx from "clsx";
import { BoxProps, ElementProps, RaikouRadius, RaikouShadow } from "@raikou/core";
import { Transition, TransitionOverride } from "../../Transition/src";
import { FocusTrap } from "../../FocusTrap/src";
import { Paper } from "../../Paper/src";
import { useModalBaseContext } from "./ModalBase.context";

export interface ModalBaseContentProps extends BoxProps, ElementProps<"div"> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow`, `none` by default */
  shadow?: RaikouShadow | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: RaikouRadius | number | (string & {});
}

interface _ModalBaseContentProps extends ModalBaseContentProps {
  innerProps: React.ComponentPropsWithoutRef<"div">;
}

export const ModalBaseContent = forwardRef<
  HTMLDivElement,
  _ModalBaseContentProps
>(
  (
    { transitionProps, className, innerProps, onKeyDown, style, ...others },
    ref
  ) => {
    const ctx = useModalBaseContext();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const shouldTrigger =
        (event.target as HTMLElement)?.getAttribute(
          "data-raikou-stop-propagation"
        ) !== "true";
      shouldTrigger &&
        event.key === "Escape" &&
        ctx.closeOnEscape &&
        ctx.onClose();
      onKeyDown?.(event);
    };

    return (
      <Transition
        mounted={ctx.opened}
        transition="pop"
        {...ctx.transitionProps}
        {...transitionProps}
      >
        {(transitionStyles) => (
          <div
            {...innerProps}
            className={cx("modalBase-inner", innerProps.className)}
          >
            <FocusTrap active={ctx.opened && ctx.trapFocus}>
              <Paper
                {...others}
                component="section"
                role="dialog"
                tabIndex={-1}
                aria-modal
                aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
                aria-labelledby={
                  ctx.titleMounted ? ctx.getTitleId() : undefined
                }
                onKeyDown={handleKeyDown}
                ref={ref}
                style={[style, transitionStyles]}
                className={cx("modalBase-content", className)}
              >
                {others.children}
              </Paper>
            </FocusTrap>
          </div>
        )}
      </Transition>
    );
  }
);
