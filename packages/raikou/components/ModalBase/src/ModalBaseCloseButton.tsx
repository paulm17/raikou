import React, { forwardRef } from "react";
import cx from "clsx";
import { BoxProps, ElementProps } from "@raikou/core";
import { CloseButton } from "../../CloseButton/src";
import { useModalBaseContext } from "./ModalBase.context";

export interface ModalBaseCloseButtonProps
  extends BoxProps,
    ElementProps<"button"> {}

export const ModalBaseCloseButton = forwardRef<
  HTMLButtonElement,
  ModalBaseCloseButtonProps
>(({ className, ...others }, ref) => {
  const ctx = useModalBaseContext();
  return (
    <CloseButton
      ref={ref}
      {...others}
      onClick={ctx.onClose}
      className={cx("modalBase-close", className)}
    />
  );
});

ModalBaseCloseButton.displayName = "@raikou/core/ModalBaseCloseButton";
