import React from "react";
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
  StyleProp,
  RaikouSpacing,
  useRandomClassName,
} from "@raikou/core";
import { GridCol } from "./GridCol/GridCol";
import { GridProvider } from "./Grid.context";
import { GridVariables } from "./GridVariables";

export type GridStylesNames = "root" | "col" | "inner";
export type GridCssVariables = {
  root: "--grid-justify" | "--grid-align";
};

export interface GridProps
  extends BoxProps,
    StylesApiProps<GridFactory>,
    ElementProps<"div"> {
  /** Gutter between columns, key of `theme.spacing` or any valid CSS value, `'md'` by default */
  gutter?: StyleProp<RaikouSpacing | (string & {}) | number>;

  /** Determines whether columns in the last row should expand to fill all available space, `false` by default */
  grow?: boolean;

  /** Sets `justify-content`, `flex-start` by default */
  justify?: React.CSSProperties["justifyContent"];

  /** Sets `align-items`, `stretch` by default */
  align?: React.CSSProperties["alignItems"];

  /** Number of columns in each row, `12` by default */
  columns?: number;
}

export type GridFactory = Factory<{
  props: GridProps;
  ref: HTMLDivElement;
  stylesNames: GridStylesNames;
  vars: GridCssVariables;
  staticComponents: {
    Col: typeof GridCol;
  };
}>;

const defaultProps: Partial<GridProps> = {
  gutter: "md",
  grow: false,
  columns: 12,
};

const varsResolver = createVarsResolver<GridFactory>(
  (_, { justify, align }) => ({
    root: {
      "--grid-justify": justify,
      "--grid-align": align,
    },
  }),
);

export const Grid = factory<GridFactory>((_props, ref) => {
  const props = useProps("Grid", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    grow,
    gutter,
    columns,
    align,
    justify,
    children,
    ...others
  } = props;

  const getStyles = useStyles<GridFactory>({
    name: "Grid",
    classes: {
      root: "grid-root",
      col: "grid-col",
      inner: "grid-inner",
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

  const responsiveClassName = useRandomClassName();

  // encapsulate GridVariables in a div due to it nerfing
  // data-raikou-styles="system"

  return (
    <GridProvider value={{ getStyles, grow, columns: columns! }}>
      <div>
        <GridVariables selector={`.${responsiveClassName}`} {...props} />
      </div>
      <Box
        ref={ref}
        {...getStyles("root", { className: responsiveClassName })}
        {...others}
      >
        <div {...getStyles("inner")}>{children}</div>
      </Box>
    </GridProvider>
  );
});

Grid.displayName = "@raikou/core/Grid";
Grid.Col = GridCol;
