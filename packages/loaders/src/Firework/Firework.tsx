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
import { LoaderFireworkRootStyle } from "./Firework.css";

export type FireworkStylesNames = "root";
export type FireworkCssVariables = {
  root: "--firework-color" | "--firework-size";
};

export interface FireworkProps
  extends BoxProps,
    StylesApiProps<FireworkFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type FireworkFactory = Factory<{
  props: FireworkProps;
  ref: HTMLDivElement;
  stylesNames: FireworkStylesNames;
  vars: FireworkCssVariables;
}>;

const defaultProps: Partial<FireworkProps> = {
  size: 40,
};

const varsResolver = createVarsResolver<FireworkFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--firework-color": color ? getThemeColor(color, theme) : undefined,
      "--firework-size": getSize(size, "firework-size") ?? undefined,
    },
  }),
);

export const Firework = factory<FireworkFactory>((_props, ref) => {
  const props = useProps("Firework", defaultProps, _props);
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

  const getStyles = useStyles<FireworkFactory>({
    name: "Firework",
    props,
    classes: {
      root: LoaderFireworkRootStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return <Box {...getStyles("root")} ref={ref} {...others} />;
});

Firework.displayName = "@raikou/core/Firework";
