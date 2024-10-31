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
import { LoaderMagicRootStyle, LoaderMagicBallStyle } from "./Magic.css";

export type MagicStylesNames = "root";
export type MagicCssVariables = {
  root: "--magic-color" | "--magic-size";
};

export interface MagicProps
  extends BoxProps,
    StylesApiProps<MagicFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type MagicFactory = Factory<{
  props: MagicProps;
  ref: HTMLDivElement;
  stylesNames: MagicStylesNames;
  vars: MagicCssVariables;
}>;

const defaultProps: Partial<MagicProps> = {
  size: 70,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 35,
      sm: 42,
      md: 70,
      lg: 85,
      xl: 112,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<MagicFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--magic-color": color ? getThemeColor(color, theme) : undefined,
      "--magic-size": getSize(size, "magic-size") ?? undefined,
    },
  }),
);

export const Magic = factory<MagicFactory>((_props, ref) => {
  const props = useProps("Magic", defaultProps, _props);
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

  const getStyles = useStyles<MagicFactory>({
    name: "Magic",
    props,
    classes: {
      root: LoaderMagicRootStyle,
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
      {/* @ts-ignore */}
      {[...Array(Math.round(newSize / 12))].map((_, i) => {
        return (
          <span
            key={i}
            className={LoaderMagicBallStyle}
            style={{
              width: `${Math.floor(i * (newSize / (newSize / 12)))}px`,
              height: `${Math.floor(i * (newSize / (newSize / 12)))}px`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        );
      })}
    </Box>
  );
});

Magic.displayName = "@raikou/core/Magic";
