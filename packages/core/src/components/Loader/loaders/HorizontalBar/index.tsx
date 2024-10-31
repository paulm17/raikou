import { forwardRef } from "react";
import cx from "clsx";
import { Box } from "../../../../core";
import { RaikouLoaderComponent } from "../../Loader.types";
import {
  LoaderHorizontalBarLoaderStyle,
  LoaderHorizontalBar1Style,
  LoaderHorizontalBar2Style,
} from "./HorizontalBar.css";

export const HorizontalBar: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(LoaderHorizontalBarLoaderStyle, className)}
      {...others}
      ref={ref}
    >
      <span className={LoaderHorizontalBar1Style} />
      <span className={LoaderHorizontalBar2Style} />
    </Box>
  ),
);

HorizontalBar.displayName = "@raikou/core/HorizontalBar";
