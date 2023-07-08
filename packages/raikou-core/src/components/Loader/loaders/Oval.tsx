import React, { forwardRef } from "react";
import cx from "clsx";
import { Box } from "../../../core";
import { RaikouLoaderComponent } from "../Loader.types";

export const Oval: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx("oval-loader", className)}
      {...others}
      ref={ref}
    />
  )
);
