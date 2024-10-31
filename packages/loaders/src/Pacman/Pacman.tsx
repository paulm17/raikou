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
  LoaderPacmanRootStyle,
  LoaderPacmanPacStyle,
  LoaderPacmanManStyle,
  LoaderPacmanBall2Style,
  LoaderPacmanBall3Style,
  LoaderPacmanBall4Style,
  LoaderPacmanBall5Style,
} from "./Pacman.css";

export type PacmanStylesNames = "root";
export type PacmanCssVariables = {
  root:
    | "--pacman-color"
    | "--pacman-size"
    | "--pacman-margin"
    | "--pacman-speed-multiplier";
};

export interface PacmanProps
  extends BoxProps,
    StylesApiProps<PacmanFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Margin between the loader and the indicator, numbers are converted to rem */
  margin?: React.CSSProperties["margin"];

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type PacmanFactory = Factory<{
  props: PacmanProps;
  ref: HTMLDivElement;
  stylesNames: PacmanStylesNames;
  vars: PacmanCssVariables;
}>;

const defaultProps: Partial<PacmanProps> = {
  size: 25,
  margin: 2,
  speedMultiplier: 1,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 12,
      sm: 15,
      md: 25,
      lg: 30,
      xl: 40,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<PacmanFactory>(
  // @ts-ignore
  (theme, { color, size, margin, speedMultiplier }) => ({
    root: {
      "--pacman-color": color ? getThemeColor(color, theme) : undefined,
      "--pacman-size": getSize(size, "pacman-size") ?? undefined,
      "--pacman-margin": getSize(margin, "pacman-margin") ?? undefined,
      "--pacman-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Pacman = factory<PacmanFactory>((_props, ref) => {
  const props = useProps("Pacman", defaultProps, _props);
  const {
    color,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    size,
    margin,
    variant,
    children,
    speedMultiplier,
    ...others
  } = props;

  const getStyles = useStyles<PacmanFactory>({
    name: "Pacman",
    props,
    classes: {
      root: LoaderPacmanRootStyle,
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
  const translateX = `${-4 * newSize}px`;
  const translateY = `${-newSize! / 4}px`;

  const rawHTML = `
    <style scoped> 
      @keyframes pacman-ball-loader {
        75% {opacity: 0.7}
        100% {transform: translate(${translateX}, ${translateY})}
      }
    </style>
  `;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      <span className={LoaderPacmanPacStyle} />
      <span className={LoaderPacmanManStyle} />
      <span className={LoaderPacmanBall2Style} />
      <span className={LoaderPacmanBall3Style} />
      <span className={LoaderPacmanBall4Style} />
      <span className={LoaderPacmanBall5Style} />
    </Box>
  );
});

Pacman.displayName = "@raikou/core/Pacman";
