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
  LoaderClimbingBoxContainerStyle,
  LoaderClimbingBoxHillStyle,
  LoaderClimbingBoxStyle,
  LoaderClimbingBoxWrapperStyle,
} from "./ClimbingBox.css";

export type ClimbingBoxStylesNames = "root";
export type ClimbingBoxCssVariables = {
  root:
    | "--climbing-box-color"
    | "--climbing-box-size"
    | "--climbing-box-speed-multiplier";
};

export interface ClimbingBoxProps
  extends BoxProps,
    StylesApiProps<ClimbingBoxFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type ClimbingBoxFactory = Factory<{
  props: ClimbingBoxProps;
  ref: HTMLDivElement;
  stylesNames: ClimbingBoxStylesNames;
  vars: ClimbingBoxCssVariables;
}>;

const defaultProps: Partial<ClimbingBoxProps> = {
  size: 15,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<ClimbingBoxFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--climbing-box-color": color ? getThemeColor(color, theme) : undefined,
      "--climbing-box-size": getSize(size, "climbing-box-size") ?? undefined,
      "--climbing-box-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const ClimbingBox = factory<ClimbingBoxFactory>((_props, ref) => {
  const props = useProps("ClimbingBox", defaultProps, _props);
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

  const getStyles = useStyles<ClimbingBoxFactory>({
    name: "ClimbingBox",
    props,
    classes: {
      root: LoaderClimbingBoxContainerStyle,
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
      <span className={LoaderClimbingBoxWrapperStyle}>
        <span className={LoaderClimbingBoxStyle} />
        <span className={LoaderClimbingBoxHillStyle} />
      </span>
    </Box>
  );
});

ClimbingBox.displayName = "@raikou/core/ClimbingBox";
