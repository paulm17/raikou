import { Fragment } from "react/jsx-runtime";
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
import { LoaderMetroRootStyle, LoaderMetroBallStyle } from "./Metro.css";

export type MetroStylesNames = "root";
export type MetroCssVariables = {
  root: "--metro-color" | "--metro-size";
};

export interface MetroProps
  extends BoxProps,
    StylesApiProps<MetroFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type MetroFactory = Factory<{
  props: MetroProps;
  ref: HTMLDivElement;
  stylesNames: MetroStylesNames;
  vars: MetroCssVariables;
}>;

const defaultProps: Partial<MetroProps> = {
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

const varsResolver = createVarsResolver<MetroFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--metro-color": color ? getThemeColor(color, theme) : undefined,
      "--metro-size": getSize(size, "metro-size") ?? undefined,
    },
  }),
);

export const Metro = factory<MetroFactory>((_props, ref) => {
  const props = useProps("Metro", defaultProps, _props);
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

  const getStyles = useStyles<MetroFactory>({
    name: "Metro",
    props,
    classes: {
      root: LoaderMetroRootStyle,
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

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      {[...Array(9)].map((_, i) => {
        const index = i + 1;
        const countBalls = 9;

        const rawHTML = `
        <style scoped> 
          @keyframes rotate-ball-${i} {
            ${(((newSize / 2 / countBalls) * (index - 1)) / newSize) * 100}% {
              opacity: 0;
            }
            ${(((newSize / 2 / countBalls + 0.0001) * (index - 1)) / newSize) * 100}% {
              opacity: 1;
              transform: ${`rotate(${0 - (360 / countBalls) * (index - 2)}deg)`};
            }
            ${(((newSize / 2 / countBalls) * (index - 0) + 2) / newSize) * 100}% {
              transform: ${`rotate(${0 - (360 / countBalls) * (index - 1)}deg)`};
            }
            ${((newSize / 2 + (newSize / 2 / countBalls) * (index - 0) + 2) / newSize) * 100}% {
              transform: ${`rotate(${0 - (360 / countBalls) * (index - 1)}deg)`};
            }
            100% {
              transform: ${`rotate(${0 - (360 / countBalls) * (countBalls - 1)}deg)`};
              opacity: 1;
            }
          }
        </style>
      `;

        return (
          <Fragment key={i}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <span
              key={i}
              className={LoaderMetroBallStyle}
              style={{
                animation: `rotate-ball-${i} 2s infinite linear`,
                transform: `rotate(${(360 / countBalls) * (i + 1)}deg)`,
              }}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});

Metro.displayName = "@raikou/core/Metro";
