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
  RaikouRadius,
  RaikouColor,
  StylesApiProps,
  useProps,
  useStyles,
} from "../../../core";
import {
  LoaderFadeRootStyle,
  LoaderFade1Style,
  LoaderFade2Style,
  LoaderFade3Style,
  LoaderFade4Style,
  LoaderFade5Style,
  LoaderFade6Style,
  LoaderFade7Style,
  LoaderFade8Style,
} from "./Fade.css";

export type FadeStylesNames = "root";
export type FadeCssVariables = {
  root:
    | "--fade-color"
    | "--fade-size"
    | "--fade-radius"
    | "--fade-margin"
    | "--fade-speed-multiplier";
};

export interface FadeProps
  extends BoxProps,
    StylesApiProps<FadeFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `theme.defaultRadius` by default. */
  radius?: RaikouRadius;

  /** Margin between the loader and the indicator, numbers are converted to rem */
  margin?: React.CSSProperties["margin"];

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  indicatorColor?: RaikouColor;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type FadeFactory = Factory<{
  props: FadeProps;
  ref: HTMLDivElement;
  stylesNames: FadeStylesNames;
  vars: FadeCssVariables;
}>;

const defaultProps: Partial<FadeProps> = {
  size: 60,
  radius: 2,
  margin: 2,
  speedMultiplier: 1,
  indicatorColor: "purple",
};

const varsResolver = createVarsResolver<FadeFactory>(
  // @ts-ignore
  (theme, { color, radius, margin, size, speedMultiplier }) => ({
    root: {
      "--fade-color": color ? getThemeColor(color, theme) : undefined,
      "--fade-size": getSize(size, "fade-size") ?? undefined,
      "--fade-radius": getSize(radius, "fade-radius") ?? undefined,
      "--fade-margin": getSize(margin, "fade-margin") ?? undefined,
      "--fade-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Fade = factory<FadeFactory>((_props, ref) => {
  const props = useProps("Fade", defaultProps, _props);
  const {
    color,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    children,
    indicatorColor,
    speedMultiplier,
    size,
    ...others
  } = props;

  const getStyles = useStyles<FadeFactory>({
    name: "Fade",
    props,
    classes: {
      root: LoaderFadeRootStyle,
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
      <span className={LoaderFade1Style} />
      <span className={LoaderFade2Style} />
      <span className={LoaderFade3Style} />
      <span className={LoaderFade4Style} />
      <span className={LoaderFade5Style} />
      <span className={LoaderFade6Style} />
      <span className={LoaderFade7Style} />
      <span className={LoaderFade8Style} />
    </Box>
  );
});

Fade.displayName = "@raikou/core/Fade";
