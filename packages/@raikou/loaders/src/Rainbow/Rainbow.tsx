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
import { LoaderRainbowRootStyle, LoaderRainbowLineStyle } from "./Rainbow.css";

export type RainbowStylesNames = "root";
export type RainbowCssVariables = {
  root: "--rainbow-color" | "--rainbow-size" | "--rainbow-speed-multiplier";
};

export interface RainbowProps
  extends BoxProps,
    StylesApiProps<RainbowFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type RainbowFactory = Factory<{
  props: RainbowProps;
  ref: HTMLDivElement;
  stylesNames: RainbowStylesNames;
  vars: RainbowCssVariables;
}>;

const defaultProps: Partial<RainbowProps> = {
  size: 50,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<RainbowFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--rainbow-color": color ? getThemeColor(color, theme) : undefined,
      "--rainbow-size": getSize(size, "rainbow-size") ?? undefined,
      "--rainbow-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Rainbow = factory<RainbowFactory>((_props, ref) => {
  const props = useProps("Rainbow", defaultProps, _props);
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

  const getStyles = useStyles<RainbowFactory>({
    name: "Rainbow",
    props,
    classes: {
      root: LoaderRainbowRootStyle,
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
      <span className={LoaderRainbowLineStyle} />
    </Box>
  );
});

Rainbow.displayName = "@raikou/core/Rainbow";
