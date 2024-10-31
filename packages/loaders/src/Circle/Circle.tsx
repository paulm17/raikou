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
  LoaderCircle1Style,
  LoaderCircle2Style,
  LoaderCircle3Style,
  LoaderCircle4Style,
  LoaderCircle5Style,
  LoaderCircleRootStyle,
} from "./Circle.css";

export type CircleStylesNames = "root";
export type CircleCssVariables = {
  root: "--circle-color" | "--circle-size" | "--circle-speed-multiplier";
};

export interface CircleProps
  extends BoxProps,
    StylesApiProps<CircleFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type CircleFactory = Factory<{
  props: CircleProps;
  ref: HTMLDivElement;
  stylesNames: CircleStylesNames;
  vars: CircleCssVariables;
}>;

const defaultProps: Partial<CircleProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<CircleFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--circle-color": color ? getThemeColor(color, theme) : undefined,
      "--circle-size": getSize(size, "circle-size") ?? undefined,
      "--circle-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Circle = factory<CircleFactory>((_props, ref) => {
  const props = useProps("Circle", defaultProps, _props);
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

  const getStyles = useStyles<CircleFactory>({
    name: "Circle",
    props,
    classes: {
      root: LoaderCircleRootStyle,
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
      <span className={LoaderCircle1Style} />
      <span className={LoaderCircle2Style} />
      <span className={LoaderCircle3Style} />
      <span className={LoaderCircle4Style} />
      <span className={LoaderCircle5Style} />
    </Box>
  );
});

Circle.displayName = "@raikou/core/Circle";
