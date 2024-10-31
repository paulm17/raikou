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
  LoaderClockRootStyle,
  LoaderClockHourStyle,
  LoaderClockMinuteStyle,
} from "./Clock.css";

export type ClockStylesNames = "root";
export type ClockCssVariables = {
  root: "--clock-color" | "--clock-size" | "--clock-speed-multiplier";
};

export interface ClockProps
  extends BoxProps,
    StylesApiProps<ClockFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type ClockFactory = Factory<{
  props: ClockProps;
  ref: HTMLDivElement;
  stylesNames: ClockStylesNames;
  vars: ClockCssVariables;
}>;

const defaultProps: Partial<ClockProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<ClockFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--clock-color": color ? getThemeColor(color, theme) : undefined,
      "--clock-size": getSize(size, "clock-size") ?? undefined,
      "--clock-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Clock = factory<ClockFactory>((_props, ref) => {
  const props = useProps("Clock", defaultProps, _props);
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

  const getStyles = useStyles<ClockFactory>({
    name: "Clock",
    props,
    classes: {
      root: LoaderClockRootStyle,
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
      <span className={LoaderClockHourStyle} />
      <span className={LoaderClockMinuteStyle} />
    </Box>
  );
});

Clock.displayName = "@raikou/core/Clock";
