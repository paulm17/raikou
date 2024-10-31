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
} from "../../../core";
import {
  LoaderBarsRootStyle,
  LoaderBars1Style,
  LoaderBars2Style,
  LoaderBars3Style,
  LoaderBars4Style,
  LoaderBars5Style,
} from "./Bars.css";

export type BarsStylesNames = "root";
export type BarsCssVariables = {
  root: "--bars-color" | "--bars-size" | "--bars-speed-multiplier";
};

export interface BarsProps
  extends BoxProps,
    StylesApiProps<BarsFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type BarsFactory = Factory<{
  props: BarsProps;
  ref: HTMLDivElement;
  stylesNames: BarsStylesNames;
  vars: BarsCssVariables;
}>;

const defaultProps: Partial<BarsProps> = {
  size: 40,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<BarsFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--bars-color": color ? getThemeColor(color, theme) : undefined,
      "--bars-size": getSize(size, "bars-size") ?? undefined,
      "--bars-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Bars = factory<BarsFactory>((_props, ref) => {
  const props = useProps("Bars", defaultProps, _props);
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

  const getStyles = useStyles<BarsFactory>({
    name: "Bars",
    props,
    classes: {
      root: LoaderBarsRootStyle,
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
      <span className={LoaderBars1Style} />
      <span className={LoaderBars2Style} />
      <span className={LoaderBars3Style} />
      <span className={LoaderBars4Style} />
      <span className={LoaderBars5Style} />
    </Box>
  );
});

Bars.displayName = "@raikou/core/Bars";
