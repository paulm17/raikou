import React, { forwardRef } from "react";
import cx from "clsx";
import { Box } from "@raikou/core";
import { RaikouLoaderComponent } from "../../Loader.types";

export const Dots: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx("dots-loader", className)}
      {...others}
      ref={ref}
    >
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </Box>
  )
);
