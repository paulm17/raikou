import React, { forwardRef } from "react";
import cx from "clsx";
import { Box, BoxProps, ElementProps } from "@raikou/core";
import classes from "./ModalBase.module.css";
import { useModalTitle } from "./use-modal-title-id";

export interface ModalBaseTitleProps extends BoxProps, ElementProps<"h2"> {}

export const ModalBaseTitle = forwardRef<
  HTMLHeadingElement,
  ModalBaseTitleProps
>(({ className, ...others }, ref) => {
  const id = useModalTitle();
  return (
    <Box
      component="h2"
      ref={ref}
      className={cx(classes.title, className)}
      {...others}
      id={id}
    />
  );
});

ModalBaseTitle.displayName = "@raikou/core/ModalBaseTitle";
