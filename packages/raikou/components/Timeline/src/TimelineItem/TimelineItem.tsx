import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  RaikouRadius,
  RaikouColor,
  getRadius,
  useRaikouTheme,
  getThemeColor,
} from "@raikou/core";
import { useStore } from "../store";

export type TimelineItemStylesNames =
  | "itemBody"
  | "itemContent"
  | "itemBullet"
  | "item"
  | "itemTitle";

//@ts-ignore
export interface TimelineItemProps
  extends BoxProps,
    StylesApiProps<TimelineItemFactory>,
    ElementProps<"div", "title"> {
  /** Determines whether the item should be highlighted, controlled by the parent `Timeline` component  */
  __active?: boolean;

  /** Determines whether the line of the item should be highlighted, controlled by the parent Timeline component */
  __lineActive?: boolean;

  /** Line and bullet position relative to item content, controlled by the parent Timeline component */
  __align?: "right" | "left";

  /** Item title, displayed next to the bullet */
  title?: React.ReactNode;

  /** Content displayed below the title */
  children?: React.ReactNode;

  /** React node that should be rendered inside the bullet – icon, image, avatar, etc. By default, large white dot is displayed. */
  bullet?: React.ReactNode;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `'xl'` by default */
  radius?: RaikouRadius | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color to control active item colors, `theme.primaryColor` by default */
  color?: RaikouColor;

  /** Controls line border style, `'solid'` by default */
  lineVariant?: "solid" | "dashed" | "dotted";
}

export type TimelineItemFactory = Factory<{
  props: TimelineItemProps;
  ref: HTMLDivElement;
  stylesNames: TimelineItemStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TimelineItemProps> = {};

export const TimelineItem = factory<TimelineItemFactory>((_props, ref) => {
  const props = useProps("TimelineItem", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __active,
    __align,
    __lineActive,
    __vars,
    bullet,
    radius,
    color,
    lineVariant,
    children,
    title,
    ...others
  } = props;

  const theme = useRaikouTheme();

  const stylesApiProps = { classNames, styles };

  return (
    <Box
      {...useStore
        .getState()
        .getStyles("item", { ...stylesApiProps, className, style })}
      mod={{ "line-active": __lineActive, active: __active }}
      ref={ref}
      __vars={{
        "--tli-radius": radius ? getRadius(radius) : undefined,
        "--tli-color": color ? getThemeColor(color, theme) : undefined,
        "--tli-border-style": lineVariant || undefined,
      }}
      {...others}
    >
      <Box
        {...useStore.getState().getStyles("itemBullet", stylesApiProps)}
        mod={{ "with-child": !!bullet, align: __align, active: __active }}
      >
        {bullet as any}
      </Box>

      <div {...useStore.getState().getStyles("itemBody", stylesApiProps)}>
        {title && (
          <div {...useStore.getState().getStyles("itemTitle", stylesApiProps)}>
            {title as any}
          </div>
        )}
        <div {...useStore.getState().getStyles("itemContent", stylesApiProps)}>
          {children as any}
        </div>
      </div>
    </Box>
  );
});

TimelineItem.displayName = "@raikou/core/TimelineItem";
