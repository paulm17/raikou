import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  getThemeColor,
  RaikouSize,
  RaikouColor,
  StylesApiProps,
  useProps,
  useStyles,
} from "@raikou/core";
import {
  LoaderGridLoaderStyle,
  LoaderGrid1Style,
  LoaderGrid2Style,
  LoaderGrid3Style,
  LoaderGrid4Style,
  LoaderGrid5Style,
  LoaderGrid6Style,
  LoaderGrid7Style,
  LoaderGrid8Style,
  LoaderGrid9Style,
} from "./Grid.css";

export type GridStylesNames = "root";
export type GridCssVariables = {
  root:
    | "--grid-color"
    | "--grid-size"
    | "--grid-margin"
    | "--grid-speed-multiplier"
    | "--grid-rand-1"
    | "--grid-rand-2"
    | "--grid-rand-3"
    | "--grid-rand-4"
    | "--grid-rand-5"
    | "--grid-rand-6"
    | "--grid-rand-7"
    | "--grid-rand-8"
    | "--grid-rand-9";
};

export interface GridProps
  extends BoxProps,
    StylesApiProps<GridFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Margin between the loader and the indicator, numbers are converted to rem */
  margin?: React.CSSProperties["margin"];

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type GridFactory = Factory<{
  props: GridProps;
  ref: HTMLDivElement;
  stylesNames: GridStylesNames;
  vars: GridCssVariables;
}>;

const defaultProps: Partial<GridProps> = {
  size: 15,
  margin: 2,
  speedMultiplier: 1,
};

const random = (rand: number) => Math.random() * rand;

const varsResolver = createVarsResolver<GridFactory>(
  // @ts-ignore
  (theme, { color, size, margin, speedMultiplier }) => ({
    root: {
      "--grid-color": color ? getThemeColor(color, theme) : undefined,
      "--grid-size": getSize(size, "grid-size") ?? undefined,
      "--grid-margin": getSize(margin, "grid-margin") ?? undefined,
      "--grid-speed-multiplier": `${speedMultiplier}`,
      "--grid-rand-1": random(100).toString(),
      "--grid-rand-2": random(100).toString(),
      "--grid-rand-3": random(100).toString(),
      "--grid-rand-4": random(100).toString(),
      "--grid-rand-5": random(100).toString(),
      "--grid-rand-6": random(100).toString(),
      "--grid-rand-7": random(100).toString(),
      "--grid-rand-8": random(100).toString(),
      "--grid-rand-9": random(100).toString(),
    },
  }),
);

export const Grid = factory<GridFactory>((_props, ref) => {
  const props = useProps("Grid", defaultProps, _props);
  const {
    color,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    size,
    variant,
    children,
    speedMultiplier,
    ...others
  } = props;

  const getStyles = useStyles<GridFactory>({
    name: "Grid",
    props,
    classes: {
      root: LoaderGridLoaderStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <span className={LoaderGrid1Style} />
      <span className={LoaderGrid2Style} />
      <span className={LoaderGrid3Style} />
      <span className={LoaderGrid4Style} />
      <span className={LoaderGrid5Style} />
      <span className={LoaderGrid6Style} />
      <span className={LoaderGrid7Style} />
      <span className={LoaderGrid8Style} />
      <span className={LoaderGrid9Style} />
    </Box>
  );
});

Grid.displayName = "@raikou/core/Grid";
