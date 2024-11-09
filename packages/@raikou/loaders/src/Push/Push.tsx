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
import { LoaderPushRootStyle, LoaderPushBarStyle } from "./Push.css";

export type PushStylesNames = "root";
export type PushCssVariables = {
  root: "--push-color" | "--push-size";
};

export interface PushProps
  extends BoxProps,
    StylesApiProps<PushFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type PushFactory = Factory<{
  props: PushProps;
  ref: HTMLDivElement;
  stylesNames: PushStylesNames;
  vars: PushCssVariables;
}>;

const defaultProps: Partial<PushProps> = {
  size: 30,
};

const varsResolver = createVarsResolver<PushFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--push-color": color ? getThemeColor(color, theme) : undefined,
      "--push-size": getSize(size, "push-size") ?? undefined,
    },
  }),
);

export const Push = factory<PushFactory>((_props, ref) => {
  const props = useProps("Push", defaultProps, _props);
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

  const getStyles = useStyles<PushFactory>({
    name: "Push",
    props,
    classes: {
      root: LoaderPushRootStyle,
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
      {[...Array(10)].map((_, i) => {
        return (
          <span
            className={LoaderPushBarStyle}
            key={i}
            style={{
              left: `calc(${i} * (var(--push-size) / 5) + ((var(--push-size) / 15) - (var(--push-size) / 100)))`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        );
      })}
    </Box>
  );
});

Push.displayName = "@raikou/core/Push";
