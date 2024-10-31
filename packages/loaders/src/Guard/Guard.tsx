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
  LoaderGuardCubeSide1Style,
  LoaderGuardCubeSide2Style,
  LoaderGuardCubeStyle,
  LoaderGuardCubeWrapperStyle,
  LoaderGuardRootStyle,
} from "./Guard.css";

export type GuardStylesNames = "root";
export type GuardCssVariables = {
  root: "--guard-color" | "--guard-size";
};

export interface GuardProps
  extends BoxProps,
    StylesApiProps<GuardFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type GuardFactory = Factory<{
  props: GuardProps;
  ref: HTMLDivElement;
  stylesNames: GuardStylesNames;
  vars: GuardCssVariables;
}>;

const defaultProps: Partial<GuardProps> = {
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

const varsResolver = createVarsResolver<GuardFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--guard-color": color ? getThemeColor(color, theme) : undefined,
      "--guard-size": getSize(size, "guard-size") ?? undefined,
    },
  }),
);

export const Guard = factory<GuardFactory>((_props, ref) => {
  const props = useProps("Guard", defaultProps, _props);
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

  const getStyles = useStyles<GuardFactory>({
    name: "Guard",
    props,
    classes: {
      root: LoaderGuardRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const cubes = Array.from({ length: 3 }).reduce((acc: any, _, i) => {
    return acc.concat(
      Array.from({ length: 3 }).map((_, j) => {
        return { i, j };
      }),
    );
  }, []) as { i: number; j: number }[];

  const newSize = getNewSize(size) as number;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      {cubes.map((cube, i) => {
        return (
          <span
            key={i}
            className={LoaderGuardCubeWrapperStyle}
            style={{
              // @ts-ignore
              top: cube.i * (newSize / 4 + newSize / 8),
              // @ts-ignore
              left: cube.j * (newSize / 4 + newSize / 8),
            }}
          >
            <span
              className={LoaderGuardCubeStyle}
              style={{ animationDelay: `${i * 0.125}s` }}
            >
              <span className={LoaderGuardCubeSide1Style} />
              <span className={LoaderGuardCubeSide2Style} />
            </span>
          </span>
        );
      })}
    </Box>
  );
});

Guard.displayName = "@raikou/core/Guard";
