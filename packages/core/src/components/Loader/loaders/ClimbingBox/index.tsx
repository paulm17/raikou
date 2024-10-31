import { forwardRef } from "react";
import cx from "clsx";
import { Box } from "../../../../core";
import { RaikouLoaderComponent } from "../../Loader.types";
import {
  LoaderClimbingBoxContainerStyle,
  LoaderClimbingBoxHillStyle,
  LoaderClimbingBoxStyle,
  LoaderClimbingBoxWrapperStyle,
} from "./ClimbingBox.css";

export const ClimbingBox: RaikouLoaderComponent = forwardRef(
  ({ className, ...others }, ref) => (
    <Box
      component="span"
      className={cx(LoaderClimbingBoxContainerStyle, className)}
      {...others}
      ref={ref}
    >
      <span className={LoaderClimbingBoxWrapperStyle}>
        <span className={LoaderClimbingBoxStyle} />
        <span className={LoaderClimbingBoxHillStyle} />
      </span>
    </Box>
  ),
);

ClimbingBox.displayName = "@raikou/core/ClimbingBox";
