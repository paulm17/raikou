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
  LoaderDot1Style,
  LoaderDot2Style,
  LoaderDotLoaderStyle,
} from "./Dot.css";

export type DotStylesNames = "root";
export type DotCssVariables = {
  root: "--dot-color" | "--dot-size" | "--dot-speed-multiplier";
};

export interface DotProps
  extends BoxProps,
    StylesApiProps<DotFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type DotFactory = Factory<{
  props: DotProps;
  ref: HTMLDivElement;
  stylesNames: DotStylesNames;
  vars: DotCssVariables;
}>;

const defaultProps: Partial<DotProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<DotFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--dot-color": color ? getThemeColor(color, theme) : undefined,
      "--dot-size": getSize(size, "dot-size") ?? undefined,
      "--dot-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Dot = factory<DotFactory>((_props, ref) => {
  const props = useProps("Dot", defaultProps, _props);
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

  const getStyles = useStyles<DotFactory>({
    name: "Dot",
    props,
    classes: {
      root: LoaderDotLoaderStyle,
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
      <span className={LoaderDot1Style} />
      <span className={LoaderDot2Style} />
    </Box>
  );
});

Dot.displayName = "@raikou/core/Dot";
