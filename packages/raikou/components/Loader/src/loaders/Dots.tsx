import React, { forwardRef } from "react";
import cx from "clsx";
import { Box } from "@raikou/core";
import { RaikouLoaderComponent } from "../Loader.types";
import classes from "../Loader.module.css";

export const Dots: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(classes.dotsLoader, className)}
      {...others}
      ref={ref}
    >
      <span className={classes.dot} />
      <span className={classes.dot} />
      <span className={classes.dot} />
    </Box>
  ),
);
