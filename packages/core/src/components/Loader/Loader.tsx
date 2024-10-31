import {
  Box,
  BoxProps,
  createVarsResolver,
  factory,
  Factory,
  getSize,
  getThemeColor,
  RaikouColor,
  RaikouSize,
  StylesApiProps,
  useProps,
  useStyles,
} from "../../core";
import { LoaderRootStyle } from "./Loader.css";
import type { RaikouLoader, RaikouLoadersRecord } from "./Loader.types";
import { Bars } from "./loaders/Bars";
import { Dots } from "./loaders/Dots";
import { HorizontalBar } from "./loaders/HorizontalBar";
import { Oval } from "./loaders/Oval";
import { Bounce } from "./loaders/Bounce";
import { Circle } from "./loaders/Circle";

export type LoaderStylesNames = "root";
export type LoaderCssVariables = {
  root: "--loader-size" | "--loader-color";
};

export interface LoaderProps
  extends BoxProps,
    StylesApiProps<LoaderFactory>,
    Omit<React.ComponentPropsWithoutRef<"svg">, keyof BoxProps> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;

  /** Object of loaders components, can be customized via default props or inline. Default value contains `bars`, `oval` and `dots` */
  loaders?: RaikouLoadersRecord;

  /** Overrides default loader with given content */
  children?: React.ReactNode;
}

export interface DefaultLoaderProps extends LoaderProps {
  type?: RaikouLoader | "circle";
}

export interface HorizontalBarLoaderProps extends LoaderProps {
  type?: "horizontalBar";

  /** Skeleton `height`, numbers are converted to rem */
  height: React.CSSProperties["height"];

  /** Skeleton `width`, numbers are converted to rem */
  width: React.CSSProperties["width"];

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  indicatorColor?: RaikouColor;

  /** Speed multiplier, default value is `1` */
  speedMultiplier: number;
}

export interface BounceLoaderProps extends LoaderProps {
  type?: "bounce";

  /** Speed multiplier, default value is `1` */
  speedMultiplier: number;
}

export type LoaderFactory = Factory<{
  props: DefaultLoaderProps | HorizontalBarLoaderProps | BounceLoaderProps;
  ref: HTMLSpanElement;
  stylesNames: LoaderStylesNames;
  vars: LoaderCssVariables;
  staticComponents: {
    defaultLoaders: typeof defaultLoaders;
  };
}>;

export const defaultLoaders: RaikouLoadersRecord = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
  horizontalBar: HorizontalBar,
  bounce: Bounce,
  circle: Circle,
};

const defaultProps: Partial<DefaultLoaderProps | HorizontalBarLoaderProps> = {
  type: "oval",
  loaders: defaultLoaders,
};

const varsResolver = createVarsResolver<LoaderFactory>(
  // @ts-ignore
  (theme, { size, color, indicatorColor, width, height, speedMultiplier }) => ({
    root: {
      "--loader-size": getSize(size, "loader-size"),
      "--loader-color": color ? getThemeColor(color, theme) : undefined,

      // HorizontalBar
      "--loader-width": getSize(width, "loader-width") ?? undefined,
      "--loader-height": getSize(height, "loader-height") ?? undefined,
      "--loader-indicator-color": indicatorColor
        ? getThemeColor(indicatorColor, theme)
        : undefined,
      "--loader-speed-multiplier": speedMultiplier ?? 1,
    },
  }),
);

export const Loader = factory<LoaderFactory>((_props, ref) => {
  const props = useProps("Loader", defaultProps, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    // @ts-ignore
    indicatorColor,
    // @ts-ignore
    speedMultiplier,
    // @ts-ignore
    width,
    // @ts-ignore
    height,
    ...others
  } = props;

  const getStyles = useStyles<LoaderFactory>({
    name: "Loader",
    props,
    classes: {
      root: LoaderRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  if (children) {
    return (
      <Box {...getStyles("root")} ref={ref as any} {...(others as any)}>
        {children}
      </Box>
    );
  }

  return (
    <Box
      {...getStyles("root")}
      ref={ref}
      component={(loaders as any)[type!]}
      variant={variant}
      size={size}
      {...others}
    />
  );
});

Loader.defaultLoaders = defaultLoaders;
Loader.displayName = "@raikou/core/Loader";
