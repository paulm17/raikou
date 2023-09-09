import React, { cloneElement, Children } from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  RaikouColor,
  RaikouRadius,
  rem,
  getRadius,
  getThemeColor,
} from "@raikou/core";
import {
  TimelineItem,
  TimelineItemStylesNames,
} from "./TimelineItem/TimelineItem";
import { useStore } from "./store";

export type TimelineStylesNames = "root" | TimelineItemStylesNames;
export type TimelineCssVariables = {
  root: "--tl-line-width" | "--tl-bullet-size" | "--tl-color" | "--tl-radius";
};

// @ts-ignore
export interface TimelineProps
  extends BoxProps,
    StylesApiProps<TimelineFactory>,
    ElementProps<"div"> {
  /** `Timeline.Item` components */
  children?: React.ReactNode;

  /** Index of active element */
  active?: number;

  /** Key of `theme.colors` or any valid CSS color to control active item colors, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
  radius?: RaikouRadius;

  /** Controls size of the bullet, `20` by default */
  bulletSize?: number | string;

  /** Controls how the content is positioned relative to the bullet, `'left'` by default */
  align?: "right" | "left";

  /** Control width of the line */
  lineWidth?: number | string;

  /** Determines whether the active items direction should be reversed without reversing items order, `false` by default */
  reverseActive?: boolean;
}

export type TimelineFactory = Factory<{
  props: TimelineProps;
  ref: HTMLDivElement;
  stylesNames: TimelineStylesNames;
  vars: TimelineCssVariables;
  staticComponents: {
    Item: typeof TimelineItem;
  };
}>;

const defaultProps: Partial<TimelineProps> = {
  active: -1,
  radius: "xl",
  bulletSize: 20,
  align: "left",
  lineWidth: 4,
  reverseActive: false,
};

const varsResolver = createVarsResolver<TimelineFactory>(
  (theme, { bulletSize, lineWidth, radius, color }) => ({
    root: {
      "--tl-bullet-size": rem(bulletSize),
      "--tl-line-width": rem(lineWidth),
      "--tl-radius": getRadius(radius),
      "--tl-color": getThemeColor(color, theme),
    },
  }),
);

export const Timeline = factory<TimelineFactory>((_props, ref) => {
  const props = useProps("Timeline", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    active,
    color,
    radius,
    bulletSize,
    align,
    lineWidth,
    reverseActive,
    ...others
  } = props;

  const getStyles = useStyles<TimelineFactory>({
    name: "Timeline",
    classes: {
      root: "timeline-root",
      itemTitle: "timeline-itemTitle",
      item: "timeline-item",
      itemBullet: "timeline-itemBullet",
      itemBody: "timeline-itemBody",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const _children = Children.toArray(children);
  const items = _children.map((item: any, index) =>
    cloneElement(item, {
      unstyled,
      __align: align,
      __active:
        item.props?.active ||
        (reverseActive
          ? active! >= _children.length - index - 1
          : active! >= index),
      __lineActive:
        item.props?.lineActive ||
        (reverseActive
          ? active! >= _children.length - index - 1
          : active! - 1 >= index),
    }),
  );

  useStore.setState({ getStyles });

  return (
    <Box {...getStyles("root")} mod={{ align }} ref={ref} {...others}>
      {items as any}
    </Box>
  );
});

Timeline.displayName = "@raikou/core/Timeline";
Timeline.Item = TimelineItem;
