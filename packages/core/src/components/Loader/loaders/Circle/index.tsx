import { forwardRef } from "react";
import cx from "clsx";
import { Box } from "../../../../core";
import { RaikouLoaderComponent } from "../../Loader.types";
import {
  LoaderCircleLoaderStyle,
  LoaderCircle1Style,
  LoaderCircle2Style,
  LoaderCircle3Style,
  LoaderCircle4Style,
  LoaderCircle5Style,
} from "./Circle.css";

export const Circle: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(LoaderCircleLoaderStyle, className)}
      {...others}
      ref={ref}
    >
      <span className={LoaderCircle1Style} />
      <span className={LoaderCircle2Style} />
      <span className={LoaderCircle3Style} />
      <span className={LoaderCircle4Style} />
      <span className={LoaderCircle5Style} />
    </Box>
  ),
);

Circle.displayName = "@raikou/core/Circle";
