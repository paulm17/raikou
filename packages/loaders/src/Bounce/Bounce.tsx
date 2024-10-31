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
  LoaderBounce1Style,
  LoaderBounce2Style,
  LoaderBounceLoaderStyle,
} from "./Bounce.css";

export type BounceStylesNames = "root";
export type BounceCssVariables = {
  root: "--bounce-color" | "--bounce-size" | "--bounce-speed-multiplier";
};

export interface BounceProps
  extends BoxProps,
    StylesApiProps<BounceFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type BounceFactory = Factory<{
  props: BounceProps;
  ref: HTMLDivElement;
  stylesNames: BounceStylesNames;
  vars: BounceCssVariables;
}>;

const defaultProps: Partial<BounceProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<BounceFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--bounce-color": color ? getThemeColor(color, theme) : undefined,
      "--bounce-size": getSize(size, "bounce-size") ?? undefined,
      "--bounce-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Bounce = factory<BounceFactory>((_props, ref) => {
  const props = useProps("Bounce", defaultProps, _props);
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

  const getStyles = useStyles<BounceFactory>({
    name: "Bounce",
    props,
    classes: {
      root: LoaderBounceLoaderStyle,
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
      <span className={LoaderBounce1Style} />
      <span className={LoaderBounce2Style} />
    </Box>
  );
});

Bounce.displayName = "@raikou/core/Bounce";
