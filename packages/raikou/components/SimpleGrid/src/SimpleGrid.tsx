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
  useRandomClassName,
  StyleProp,
  RaikouSpacing,
} from "@raikou/core";
import { SimpleGridVariables } from "./SimpleGridVariables";

export type SimpleGridStylesNames = "root";

export interface SimpleGridProps
  extends BoxProps,
    StylesApiProps<SimpleGridFactory>,
    ElementProps<"div"> {
  /** Number of columns, `1` by default */
  cols?: StyleProp<number>;

  /** Spacing between columns, `'md'` by default */
  spacing?: StyleProp<RaikouSpacing>;

  /** Spacing between rows, `'md'` by default */
  verticalSpacing?: StyleProp<RaikouSpacing>;
}

export type SimpleGridFactory = Factory<{
  props: SimpleGridProps;
  ref: HTMLDivElement;
  stylesNames: SimpleGridStylesNames;
}>;

const defaultProps: Partial<SimpleGridProps> = {
  cols: 1,
  spacing: "md",
  verticalSpacing: "md",
};

export const SimpleGrid = factory<SimpleGridFactory>((_props, ref) => {
  const props = useProps("SimpleGrid", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    cols,
    verticalSpacing,
    spacing,
    ...others
  } = props;

  const getStyles = useStyles<SimpleGridFactory>({
    name: "SimpleGrid",
    classes: {
      root: "simpleGrid-root",
    },
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const responsiveClassName = useRandomClassName();

  // encapsulate GridVariables in a div due to it nerfing
  // data-raikou-styles="system"

  return (
    <>
      <div>
        <SimpleGridVariables {...props} selector={`.${responsiveClassName}`} />
      </div>
      <Box
        ref={ref}
        {...getStyles("root", { className: responsiveClassName })}
        {...others}
      />
    </>
  );
});

SimpleGrid.displayName = "@raikou/core/SimpleGrid";
