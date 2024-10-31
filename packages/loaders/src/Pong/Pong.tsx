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
  LoaderPongBallStyle,
  LoaderPongPlayerLeftStyle,
  LoaderPongPlayerRightStyle,
  LoaderPongRootStyle,
} from "./Pong.css";

export type PongStylesNames = "root";
export type PongCssVariables = {
  root: "--pong-color" | "--pong-size" | "--pong-speed-multiplier";
};

export interface PongProps
  extends BoxProps,
    StylesApiProps<PongFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type PongFactory = Factory<{
  props: PongProps;
  ref: HTMLDivElement;
  stylesNames: PongStylesNames;
  vars: PongCssVariables;
}>;

const defaultProps: Partial<PongProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<PongFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--pong-color": color ? getThemeColor(color, theme) : undefined,
      "--pong-size": getSize(size, "pong-size") ?? undefined,
      "--pong-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Pong = factory<PongFactory>((_props, ref) => {
  const props = useProps("Pong", defaultProps, _props);
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

  const getStyles = useStyles<PongFactory>({
    name: "Pong",
    props,
    classes: {
      root: LoaderPongRootStyle,
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
      <span className={LoaderPongPlayerLeftStyle} />
      <span className={LoaderPongBallStyle} />
      <span className={LoaderPongPlayerRightStyle} />
    </Box>
  );
});

Pong.displayName = "@raikou/core/Pong";
