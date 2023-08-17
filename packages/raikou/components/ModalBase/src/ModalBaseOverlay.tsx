import React, { forwardRef } from "react";
import { ElementProps } from "@raikou/core";
import { Overlay, OverlayProps } from "../../Overlay/src";
import { Transition, TransitionOverride } from "../../Transition/src";
import { useModalTransition } from "./use-modal-transition";
import { useModalBaseContext } from "./ModalBase.context";

// @ts-ignore
export interface ModalBaseOverlayProps
  extends Omit<OverlayProps, "styles" | "classNames" | "variant" | "vars">,
    ElementProps<"div", "color"> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;
}

export const ModalBaseOverlay = forwardRef<
  HTMLDivElement,
  ModalBaseOverlayProps
>(({ onClick, transitionProps, style, ...others }, ref) => {
  const ctx = useModalBaseContext();
  const transition = useModalTransition(transitionProps);

  return (
    <Transition mounted={ctx.opened} {...transition} transition="fade">
      {(transitionStyles) => (
        <Overlay
          ref={ref}
          fixed
          style={[style, transitionStyles]}
          zIndex={ctx.zIndex}
          radius={0}
          onClick={(event) => {
            onClick?.(event);
            ctx.closeOnClickOutside && ctx.onClose();
          }}
          {...others}
        />
      )}
    </Transition>
  );
});

ModalBaseOverlay.displayName = "@raikou/core/ModalBaseOverlay";
