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
  LoaderRing1Style,
  LoaderRing2Style,
  LoaderRingLoaderStyle,
} from "./Ring.css";

export type RingStylesNames = "root";
export type RingCssVariables = {
  root: "--ring-color" | "--ring-size" | "--ring-speed-multiplier";
};

export interface RingProps
  extends BoxProps,
    StylesApiProps<RingFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type RingFactory = Factory<{
  props: RingProps;
  ref: HTMLDivElement;
  stylesNames: RingStylesNames;
  vars: RingCssVariables;
}>;

const defaultProps: Partial<RingProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<RingFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--ring-color": color ? getThemeColor(color, theme) : undefined,
      "--ring-size": getSize(size, "ring-size") ?? undefined,
      "--ring-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Ring = factory<RingFactory>((_props, ref) => {
  const props = useProps("Ring", defaultProps, _props);
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

  const getStyles = useStyles<RingFactory>({
    name: "Ring",
    props,
    classes: {
      root: LoaderRingLoaderStyle,
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
      <span className={LoaderRing1Style} />
      <span className={LoaderRing2Style} />
    </Box>
  );
});

Ring.displayName = "@raikou/core/Ring";
