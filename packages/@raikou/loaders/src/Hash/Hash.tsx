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
  LoaderHash1Style,
  LoaderHash2Style,
  LoaderHashLoaderStyle,
} from "./Hash.css";

export type HashStylesNames = "root";
export type HashCssVariables = {
  root: "--hash-color" | "--hash-size" | "--hash-speed-multiplier";
};

export interface HashProps
  extends BoxProps,
    StylesApiProps<HashFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type HashFactory = Factory<{
  props: HashProps;
  ref: HTMLDivElement;
  stylesNames: HashStylesNames;
  vars: HashCssVariables;
}>;

const defaultProps: Partial<HashProps> = {
  size: 50,
  speedMultiplier: 1,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 25,
      sm: 30,
      md: 50,
      lg: 61,
      xl: 80,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<HashFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--hash-color": color ? getThemeColor(color, theme) : undefined,
      "--hash-size": getSize(size, "bounce-size") ?? undefined,
      "--hash-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Hash = factory<HashFactory>((_props, ref) => {
  const props = useProps("Hash", defaultProps, _props);
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

  const getStyles = useStyles<HashFactory>({
    name: "Hash",
    props,
    classes: {
      root: LoaderHashLoaderStyle,
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

  // @ts-ignore
  const thickness = newSize / 5;
  // @ts-ignore
  const lat = (newSize - thickness) / 2;
  const offset = lat - thickness;

  const rawHTML = `
    <style scoped> 
      @keyframes hash-before-loader {
        0% {width: ${thickness}px; box-shadow: ${lat}px ${-offset}px var(--hash-color), ${-lat}px ${offset}px var(--hash-color)}
        35% {width: ${newSize}px; box-shadow: 0 ${-offset}px var(--hash-color), 0 ${offset}px var(--hash-color)}
        70% {width: ${thickness}px; box-shadow: ${-lat}px ${-offset}px var(--hash-color), ${lat}px ${offset}px var(--hash-color)}
        100% {box-shadow: ${lat}px ${-offset}px var(--hash-color), ${-lat}px ${offset}px var(--hash-color)}
      }
      @keyframes hash-after-loader {
        0% {height: ${thickness}px; box-shadow: ${offset}px ${lat}px var(--hash-color), ${-offset}px ${-lat}px var(--hash-color)}
        35% {height: ${newSize}px; box-shadow: ${offset}px 0 var(--hash-color), ${-offset}px 0 var(--hash-color)}
        70% {height: ${thickness}px; box-shadow: ${offset}px ${-lat}px var(--hash-color), ${-offset}px ${lat}px var(--hash-color)}
        100% {box-shadow: ${offset}px ${lat}px var(--hash-color), ${-offset}px ${-lat}px var(--hash-color)}
      }
    </style>
  `;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      <span
        className={LoaderHash1Style}
        style={{ width: `${newSize / 5}px`, height: `${newSize / 5}px` }}
      />
      <span
        className={LoaderHash2Style}
        style={{ width: `${newSize / 5}px`, height: `${newSize / 5}px` }}
      />
    </Box>
  );
});

Hash.displayName = "@raikou/core/Hash";
