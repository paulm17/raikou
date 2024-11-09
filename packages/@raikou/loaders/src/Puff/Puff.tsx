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
  LoaderPuff1Style,
  LoaderPuff2Style,
  LoaderPuffLoaderStyle,
} from "./Puff.css";

export type PuffStylesNames = "root";
export type PuffCssVariables = {
  root: "--puff-color" | "--puff-size" | "--puff-speed-multiplier";
};

export interface PuffProps
  extends BoxProps,
    StylesApiProps<PuffFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type PuffFactory = Factory<{
  props: PuffProps;
  ref: HTMLDivElement;
  stylesNames: PuffStylesNames;
  vars: PuffCssVariables;
}>;

const defaultProps: Partial<PuffProps> = {
  size: 60,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<PuffFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--puff-color": color ? getThemeColor(color, theme) : undefined,
      "--puff-size": getSize(size, "puff-size") ?? undefined,
      "--puff-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Puff = factory<PuffFactory>((_props, ref) => {
  const props = useProps("Puff", defaultProps, _props);
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

  const getStyles = useStyles<PuffFactory>({
    name: "Puff",
    props,
    classes: {
      root: LoaderPuffLoaderStyle,
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
      <span className={LoaderPuff1Style} />
      <span className={LoaderPuff2Style} />
    </Box>
  );
});

Puff.displayName = "@raikou/core/Puff";
