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
  LoaderSpiralCubeSide1Style,
  LoaderSpiralCubeSide2Style,
  LoaderSpiralCubeSide3Style,
  LoaderSpiralCubeSide4Style,
  LoaderSpiralCubeStyle,
  LoaderSpiralCubeWrapperStyle,
  LoaderSpiralRootStyle,
} from "./Spiral.css";

export type SpiralStylesNames = "root";
export type SpiralCssVariables = {
  root: "--spiral-color" | "--spiral-size";
};

export interface SpiralProps
  extends BoxProps,
    StylesApiProps<SpiralFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SpiralFactory = Factory<{
  props: SpiralProps;
  ref: HTMLDivElement;
  stylesNames: SpiralStylesNames;
  vars: SpiralCssVariables;
}>;

const defaultProps: Partial<SpiralProps> = {
  size: 40,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 18,
      sm: 22,
      md: 36,
      lg: 44,
      xl: 58,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<SpiralFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--spiral-color": color ? getThemeColor(color, theme) : undefined,
      "--spiral-size": getSize(size, "spiral-size") ?? undefined,
    },
  }),
);

export const Spiral = factory<SpiralFactory>((_props, ref) => {
  const props = useProps("Spiral", defaultProps, _props);
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

  const getStyles = useStyles<SpiralFactory>({
    name: "Spiral",
    props,
    classes: {
      root: LoaderSpiralRootStyle,
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
      {[...Array(4)].map((_, i) => {
        return (
          <span
            className={LoaderSpiralCubeWrapperStyle}
            key={i}
            style={{
              // @ts-ignore
              left: `${i * (newSize / 4)}px`,
            }}
          >
            <span
              className={LoaderSpiralCubeStyle}
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            >
              <span className={LoaderSpiralCubeSide1Style} />
              <span className={LoaderSpiralCubeSide2Style} />
              <span className={LoaderSpiralCubeSide3Style} />
              <span className={LoaderSpiralCubeSide4Style} />
            </span>
          </span>
        );
      })}
    </Box>
  );
});

Spiral.displayName = "@raikou/core/Spiral";
