import React, { forwardRef } from "react";
import cx from "clsx";
import { Box } from "@raikou/core";
import { RaikouLoaderComponent } from "../Loader.types";
import classes from "../Loader.module.css";

export const Bars: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(classes.barsLoader, className)}
      {...others}
      ref={ref}
    >
      <span className={classes.bar} />
      <span className={classes.bar} />
      <span className={classes.bar} />
    </Box>
  ),
);
