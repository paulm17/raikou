import React, { forwardRef } from "react";
import cx from "clsx";
import { Box, BoxProps, ElementProps } from "../../core";
import { useModalBodyId } from "./use-modal-body-id";

export interface ModalBaseBodyProps extends BoxProps, ElementProps<"div"> {}

export const ModalBaseBody = forwardRef<HTMLDivElement, ModalBaseBodyProps>(
  ({ className, ...others }, ref) => {
    const bodyId = useModalBodyId();
    return (
      <Box
        ref={ref}
        {...others}
        id={bodyId}
        className={cx("modalBase-body", className)}
      />
    );
  }
);

ModalBaseBody.displayName = "@raikou/core/ModalBaseBody";
