import { forwardRef } from "react";
import cx from "clsx";
import { Box } from "../../../../core";
import { RaikouLoaderComponent } from "../../Loader.types";
import {
  LoaderBounceLoaderStyle,
  LoaderBounce1Style,
  LoaderBounce2Style,
} from "./Bounce.css";

export const Bounce: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(LoaderBounceLoaderStyle, className)}
      {...others}
      ref={ref}
    >
      <span className={LoaderBounce1Style} />
      <span className={LoaderBounce2Style} />
    </Box>
  ),
);

Bounce.displayName = "@raikou/core/Bounce";
