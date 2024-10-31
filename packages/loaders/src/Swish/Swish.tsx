import { Fragment } from "react";
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
import { LoaderSwishBallStyle, LoaderSwishRootStyle } from "./Swish.css";

export type SwishStylesNames = "root";
export type SwishCssVariables = {
  root: "--swish-color" | "--swish-size";
};

export interface SwishProps
  extends BoxProps,
    StylesApiProps<SwishFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SwishFactory = Factory<{
  props: SwishProps;
  ref: HTMLDivElement;
  stylesNames: SwishStylesNames;
  vars: SwishCssVariables;
}>;

const defaultProps: Partial<SwishProps> = {
  size: 40,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 20,
      sm: 24,
      md: 40,
      lg: 49,
      xl: 64,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<SwishFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--swish-color": color ? getThemeColor(color, theme) : undefined,
      "--swish-size": getSize(size, "swish-size") ?? undefined,
    },
  }),
);

export const Swish = factory<SwishFactory>((_props, ref) => {
  const props = useProps("Swish", defaultProps, _props);
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
    ...others
  } = props;

  const getStyles = useStyles<SwishFactory>({
    name: "Swish",
    props,
    classes: {
      root: LoaderSwishRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const newSize = getNewSize(size) as number;

  const colsI = Array.from({ length: 3 });
  const colsJ = Array.from({ length: 3 });
  let keyValue = 0;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      {colsI.map((_, i) => (
        <Fragment key={i}>
          {colsJ.map((_, j) => {
            return (
              <span
                key={j}
                className={LoaderSwishBallStyle}
                style={{
                  top: `${j * (newSize / 3 + newSize / 15)}px`,
                  left: `${i * (newSize / 3 + newSize / 15)}px`,
                  animationDelay: `${keyValue++ * 0.1}s`,
                }}
              />
            );
          })}
        </Fragment>
      ))}
    </Box>
  );
});

Swish.displayName = "@raikou/core/Swish";
