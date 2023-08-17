import React from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
  InlineStyles,
  useRandomClassName,
  parseStyleProps,
  StyleProp,
  RaikouSize,
  useRaikouTheme,
  filterProps,
} from "@raikou/core";
import { FLEX_STYLE_PROPS_DATA } from "./flex-props";

export type FlexStylesNames = "root";

export interface FlexProps
  extends BoxProps,
    StylesApiProps<FlexFactory>,
    ElementProps<"div"> {
  /** `gap` CSS property */
  gap?: StyleProp<RaikouSize | (string & {}) | number>;

  /** `row-gap` CSS property */
  rowGap?: StyleProp<RaikouSize | (string & {}) | number>;

  /** `column-gap` CSS property */
  columnGap?: StyleProp<RaikouSize | (string & {}) | number>;

  /** `align-items` CSS property */
  align?: StyleProp<React.CSSProperties["alignItems"]>;

  /** justify-content CSS property */
  justify?: StyleProp<React.CSSProperties["justifyContent"]>;

  /** flex-wrap CSS property */
  wrap?: StyleProp<React.CSSProperties["flexWrap"]>;

  /** flex-direction CSS property */
  direction?: StyleProp<React.CSSProperties["flexDirection"]>;
}

export type FlexFactory = Factory<{
  props: FlexProps;
  ref: HTMLDivElement;
  stylesNames: FlexStylesNames;
}>;

const defaultProps: Partial<FlexProps> = {};

export const Flex = factory<FlexFactory>((_props, ref) => {
  const props = useProps("Flex", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    gap,
    rowGap,
    columnGap,
    align,
    justify,
    wrap,
    direction,
    ...others
  } = props;

  const getStyles = useStyles<FlexFactory>({
    name: "Flex",
    classes: {
      root: "flex-root",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const theme = useRaikouTheme();
  const responsiveClassName = useRandomClassName();
  const parsedStyleProps = parseStyleProps({
    // @ts-ignore
    styleProps: { gap, rowGap, columnGap, align, justify, wrap, direction },
    theme,
    data: FLEX_STYLE_PROPS_DATA,
  });

  return (
    <>
      {parsedStyleProps.hasResponsiveStyles && (
        <InlineStyles
          selector={`.${responsiveClassName}`}
          styles={parsedStyleProps.styles}
          media={parsedStyleProps.media}
        />
      )}
      <Box
        ref={ref}
        {...getStyles("root", {
          className: responsiveClassName,
          style: filterProps(parsedStyleProps.inlineStyles),
        })}
        {...others}
      />
    </>
  );
});

Flex.displayName = "@raikou/core/Flex";
