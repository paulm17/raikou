import React, { forwardRef } from "react";
import cx from "clsx";
import { Box, BoxProps, ElementProps } from "@raikou/core";

export interface ModalBaseHeaderProps extends BoxProps, ElementProps<"div"> {}

export const ModalBaseHeader = forwardRef<HTMLDivElement, ModalBaseHeaderProps>(
  ({ className, ...others }, ref) => (
    <Box ref={ref} className={cx("modalBase-header", className)} {...others} />
  )
);

ModalBaseHeader.displayName = "@raikou/core/ModalBaseHeader";
