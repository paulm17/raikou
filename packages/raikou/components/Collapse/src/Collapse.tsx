import React, { forwardRef } from "react";
import { useReducedMotion } from "@raikou/hooks";
import {
  BoxProps,
  useProps,
  Box,
  getStyleObject,
  getTheme,
} from "@raikou/core";
import { useCollapse } from "./use-collapse";

export interface CollapseProps
  extends BoxProps,
    Omit<React.ComponentPropsWithoutRef<"div">, keyof BoxProps> {
  /** Opened state */
  in: boolean;

  /** Called each time transition ends */
  onTransitionEnd?(): void;

  /** Transition duration in ms, `200` by default */
  transitionDuration?: number;

  /** Transition timing function, default value is `ease` */
  transitionTimingFunction?: string;

  /** Determines whether opacity should be animated, `true` by default */
  animateOpacity?: boolean;
}

const defaultProps: Partial<CollapseProps> = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: true,
};

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    const {
      children,
      in: opened,
      transitionDuration,
      transitionTimingFunction,
      style,
      onTransitionEnd,
      animateOpacity,
      ...others
    } = useProps("Collapse", defaultProps, props);

    const theme = getTheme();
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = theme.respectReducedMotion
      ? shouldReduceMotion
      : false;
    const duration = reduceMotion ? 0 : transitionDuration;

    const getCollapseProps = useCollapse({
      opened,
      transitionDuration: duration,
      transitionTimingFunction,
      onTransitionEnd,
    });

    if (duration === 0) {
      return opened ? <Box {...others}>{children}</Box> : null;
    }

    return (
      <Box
        {...getCollapseProps({
          style: getStyleObject(style, theme),
          ref,
          ...others,
        })}
      >
        <div
          style={{
            opacity: opened || !animateOpacity ? 1 : 0,
            transition: animateOpacity
              ? `opacity ${duration}ms ${transitionTimingFunction}`
              : "none",
          }}
        >
          {children}
        </div>
      </Box>
    );
  }
);

Collapse.displayName = "@raikou/core/Collapse";
