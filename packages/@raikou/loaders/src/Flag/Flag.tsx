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
  LoaderFlagLineStyle,
  LoaderFlagPlaneStyle,
  LoaderFlagRootStyle,
} from "./Flag.css";

export type FlagStylesNames = "root";
export type FlagCssVariables = {
  root: "--flag-color" | "--flag-size" | "--flag-speed-multiplier";
};

export interface FlagProps
  extends BoxProps,
    StylesApiProps<FlagFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type FlagFactory = Factory<{
  props: FlagProps;
  ref: HTMLDivElement;
  stylesNames: FlagStylesNames;
  vars: FlagCssVariables;
}>;

const defaultProps: Partial<FlagProps> = {
  size: 40,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<FlagFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--flag-color": color ? getThemeColor(color, theme) : undefined,
      "--flag-size": getSize(size, "flag-size") ?? undefined,
      "--flag-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Flag = factory<FlagFactory>((_props, ref) => {
  const props = useProps("Flag", defaultProps, _props);
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

  const getStyles = useStyles<FlagFactory>({
    name: "Flag",
    props,
    classes: {
      root: LoaderFlagRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  let keyValue = 0;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      {[...Array(4)].map((_, i) => {
        return (
          <span
            key={i}
            className={LoaderFlagLineStyle}
            style={{ animationDelay: `${keyValue * 0.05}s` }}
          >
            {[...Array(4)].map((_, j) => {
              return (
                <span
                  key={keyValue++}
                  className={LoaderFlagPlaneStyle}
                  style={{
                    left: `calc(${i}* (calc(var(--flag-size) / 6) + calc(var(--flag-size) / 9)))`,
                    top: `calc(${j}* (calc(var(--flag-size) / 6) + calc(var(--flag-size) / 9)) + calc(var(--flag-size) / 10))`,
                  }}
                />
              );
            })}
          </span>
        );
      })}
    </Box>
  );
});

Flag.displayName = "@raikou/core/Flag";
