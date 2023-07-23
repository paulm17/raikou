import React, { cloneElement } from "react";
import { useMergedRef } from "@raikou/hooks";
import {
  Box,
  factory,
  getDefaultZIndex,
  isElement,
  useProps,
  useStyles,
  getStyleObject,
  Factory,
  createVarsResolver,
  getRadius,
  getThemeColor,
  getTheme,
} from "@raikou/core";
import { OptionalPortal } from "../../../Portal/src";
import {
  TooltipBaseProps,
  TooltipCssVariables,
  TooltipStylesNames,
} from "../Tooltip.types";
import { useFloatingTooltip } from "./use-floating-tooltip";

export interface TooltipFloatingProps extends TooltipBaseProps {
  /** Offset from mouse in px, `10` by default */
  offset?: number;
}

export type TooltipFloatingFactory = Factory<{
  props: TooltipFloatingProps;
  ref: HTMLDivElement;
  stylesNames: TooltipStylesNames;
  vars: TooltipCssVariables;
}>;

const defaultProps: Partial<TooltipFloatingProps> = {
  refProp: "ref",
  withinPortal: true,
  offset: 10,
  position: "right",
  zIndex: getDefaultZIndex("popover"),
};

const varsResolver = createVarsResolver<TooltipFloatingFactory>(
  (theme, { radius, color }) => ({
    tooltip: {
      "--tooltip-radius": getRadius(radius),
      "--tooltip-bg": color ? getThemeColor(color, theme) : undefined,
    },
  })
);

export const TooltipFloating = factory<TooltipFloatingFactory>(
  (_props, ref) => {
    const props = useProps("TooltipFloating", defaultProps, _props);
    const {
      children,
      refProp,
      withinPortal,
      style,
      className,
      classNames,
      styles,
      unstyled,
      radius,
      color,
      label,
      offset,
      position,
      multiline,
      zIndex,
      disabled,
      variant,
      vars,
      portalProps,
      ...others
    } = props;

    const theme = getTheme();
    const getStyles = useStyles<TooltipFloatingFactory>({
      name: "TooltipFloating",
      props,
      classes: {
        tooltip: "tooltip-root",
        arrow: "tooltip-arrow",
      },
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "tooltip",
      vars,
      varsResolver,
    });

    const { handleMouseMove, x, y, opened, boundaryRef, floating, setOpened } =
      useFloatingTooltip({
        offset: offset!,
        position: position!,
      });

    if (!isElement(children)) {
      throw new Error(
        "[@raikou/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
      );
    }

    const targetRef = useMergedRef(boundaryRef, (children as any).ref, ref);

    const onMouseEnter = (event: React.MouseEvent<unknown, MouseEvent>) => {
      children.props.onMouseEnter?.(event);
      handleMouseMove(event);
      setOpened(true);
    };

    const onMouseLeave = (event: React.MouseEvent<unknown, MouseEvent>) => {
      children.props.onMouseLeave?.(event);
      setOpened(false);
    };

    return (
      <>
        <OptionalPortal {...portalProps} withinPortal={withinPortal}>
          <Box
            {...others}
            {...getStyles("tooltip", {
              style: {
                ...getStyleObject(style, theme),
                zIndex,
                display: !disabled && opened ? "block" : "none",
                top: (y && Math.round(y)) ?? "",
                left: (x && Math.round(x)) ?? "",
              },
            })}
            variant={variant}
            ref={floating}
          >
            {label}
          </Box>
        </OptionalPortal>

        {cloneElement(children, {
          ...children.props,
          [refProp!]: targetRef,
          onMouseEnter,
          onMouseLeave,
        })}
      </>
    );
  }
);

TooltipFloating.displayName = "@raikou/core/TooltipFloating";
