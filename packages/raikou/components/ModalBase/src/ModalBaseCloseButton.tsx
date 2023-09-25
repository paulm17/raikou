import React, { forwardRef } from "react";
import cx from "clsx";
import { BoxProps, ElementProps } from "@raikou/core";
import { CloseButton, CloseButtonProps } from "../../CloseButton/src";
import { useModalBaseContext } from "./ModalBase.context";

// @ts-ignore
export interface ModalBaseCloseButtonProps
  extends CloseButtonProps,
    BoxProps,
    ElementProps<"button"> {}

export const ModalBaseCloseButton = forwardRef<
  HTMLButtonElement,
  ModalBaseCloseButtonProps
>(({ className, onClick, ...others }, ref) => {
  const ctx = useModalBaseContext();
  return (
    <CloseButton
      ref={ref}
      {...others}
      onClick={(event) => {
        ctx.onClose();
        onClick?.(event);
      }}
      className={cx("modalBase-close", className)}
    />
  );
});

ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";
