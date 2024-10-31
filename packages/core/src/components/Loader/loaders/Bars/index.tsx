import { forwardRef } from "react";
import cx from "clsx";
import { Box } from "../../../../core";
import { RaikouLoaderComponent } from "../../Loader.types";
import { LoaderBarsLoaderStyle, LoaderBarStyle } from "./Bars.css";

export const Bars: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(LoaderBarsLoaderStyle, className)}
      {...others}
      ref={ref}
    >
      <span className={LoaderBarStyle} />
      <span className={LoaderBarStyle} />
      <span className={LoaderBarStyle} />
    </Box>
  ),
);

Bars.displayName = "@raikou/core/Bars";
