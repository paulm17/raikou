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
import { LoaderFillPlaneStyle, LoaderFillRootStyle } from "./Fill.css";

export type FillStylesNames = "root";
export type FillCssVariables = {
  root: "--fill-color" | "--fill-size";
};

export interface FillProps
  extends BoxProps,
    StylesApiProps<FillFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type FillFactory = Factory<{
  props: FillProps;
  ref: HTMLDivElement;
  stylesNames: FillStylesNames;
  vars: FillCssVariables;
}>;

const defaultProps: Partial<FillProps> = {
  size: 20,
};

const varsResolver = createVarsResolver<FillFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--fill-color": color ? getThemeColor(color, theme) : undefined,
      "--fill-size": getSize(size, "fill-size") ?? undefined,
    },
  }),
);

export const Fill = factory<FillFactory>((_props, ref) => {
  const props = useProps("Fill", defaultProps, _props);
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

  const getStyles = useStyles<FillFactory>({
    name: "Fill",
    props,
    classes: {
      root: LoaderFillRootStyle,
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
      <span className={LoaderFillPlaneStyle} />
    </Box>
  );
});

Fill.displayName = "@raikou/core/Fill";
