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
  LoaderSequenceCubeSideStyle,
  LoaderSequenceCubeStyle,
  LoaderSequenceCubeWrapperStyle,
  LoaderSequenceRootStyle,
} from "./Sequence.css";

export type SequenceStylesNames = "root";
export type SequenceCssVariables = {
  root: "--sequence-color" | "--sequence-size";
};

export interface SequenceProps
  extends BoxProps,
    StylesApiProps<SequenceFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type SequenceFactory = Factory<{
  props: SequenceProps;
  ref: HTMLDivElement;
  stylesNames: SequenceStylesNames;
  vars: SequenceCssVariables;
}>;

const defaultProps: Partial<SequenceProps> = {
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

const varsResolver = createVarsResolver<SequenceFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--sequence-color": color ? getThemeColor(color, theme) : undefined,
      "--sequence-size": getSize(size, "sequence-size") ?? undefined,
    },
  }),
);

export const Sequence = factory<SequenceFactory>((_props, ref) => {
  const props = useProps("Sequence", defaultProps, _props);
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

  const getStyles = useStyles<SequenceFactory>({
    name: "Sequence",
    props,
    classes: {
      root: LoaderSequenceRootStyle,
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
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={i}
            className={LoaderSequenceCubeWrapperStyle}
            style={{
              left: `calc(${i} * ((var(--sequence-size) / 8) + (var(--sequence-size) / 11)))`,
            }}
          >
            <span
              className={LoaderSequenceCubeStyle}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <span
                className={LoaderSequenceCubeSideStyle}
                style={{
                  transform: `rotateY(-90deg) translateZ(${newSize / 16}px)`,
                }}
              />
            </span>
          </span>
        );
      })}
    </Box>
  );
});

Sequence.displayName = "@raikou/core/Sequence";
