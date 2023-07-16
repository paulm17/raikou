import React, { forwardRef } from "react";
import cx from "clsx";
import { Box } from "@raikou/core";
import { RaikouLoaderComponent } from "../Loader.types";

export const Bars: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx("bars-loader", className)}
      {...others}
      ref={ref}
    >
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </Box>
  )
);
