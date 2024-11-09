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
  LoaderPropagateLoaderStyle,
  LoaderPropagate1Style,
  LoaderPropagate2Style,
  LoaderPropagate3Style,
  LoaderPropagate4Style,
  LoaderPropagate5Style,
  LoaderPropagate6Style,
} from "./Propagate.css";

export type PropagateStylesNames = "root";
export type PropagateCssVariables = {
  root:
    | "--propagate-color"
    | "--propagate-size"
    | "--propagate-speed-multiplier";
};

export interface PropagateProps
  extends BoxProps,
    StylesApiProps<PropagateFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type PropagateFactory = Factory<{
  props: PropagateProps;
  ref: HTMLDivElement;
  stylesNames: PropagateStylesNames;
  vars: PropagateCssVariables;
}>;

const defaultProps: Partial<PropagateProps> = {
  size: 15,
  speedMultiplier: 1,
};

const varsResolver = createVarsResolver<PropagateFactory>(
  // @ts-ignore
  (theme, { color, size, speedMultiplier }) => ({
    root: {
      "--propagate-color": color ? getThemeColor(color, theme) : undefined,
      "--propagate-size": getSize(size, "propagate-size") ?? undefined,
      "--propagate-speed-multiplier": `${speedMultiplier}`,
    },
  }),
);

export const Propagate = factory<PropagateFactory>((_props, ref) => {
  const props = useProps("Propagate", defaultProps, _props);
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

  const getStyles = useStyles<PropagateFactory>({
    name: "Propagate",
    props,
    classes: {
      root: LoaderPropagateLoaderStyle,
    },
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const distance = [1, 3, 5];

  const rawHTML = `
    <style scoped> 
      @keyframes propagate-loader-1 {
        25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
        50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
        75% {transform: translateX(-${distance[2]}rem) scale(0.5)}
        95% {transform: translateX(0rem) scale(1)}
      }
      @keyframes propagate-loader-2 {
        25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
        50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
        75% {transform: translateX(-${distance[1]}rem) scale(0.6)}
        95% {transform: translateX(0rem) scale(1)}
      }
      @keyframes propagate-loader-3 {
        25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
        75% {transform: translateX(-${distance[0]}rem) scale(0.75)}
        95% {transform: translateX(0rem) scale(1)}
      }
      @keyframes propagate-loader-4 {
        25% {transform: translateX(${distance[0]}rem) scale(0.75)}
        75% {transform: translateX(${distance[0]}rem) scale(0.75)}
        95% {transform: translateX(0rem) scale(1)}
      }
      @keyframes propagate-loader-5 {
        25% {transform: translateX(${distance[0]}rem) scale(0.75)}
        50% {transform: translateX(${distance[1]}rem) scale(0.6)}
        75% {transform: translateX(${distance[1]}rem) scale(0.6)}
        95% {transform: translateX(0rem) scale(1)}
      }
      @keyframes propagate-loader-6 {
        25% {transform: translateX(${distance[0]}rem) scale(0.75)}
        50% {transform: translateX(${distance[1]}rem) scale(0.6)}
        75% {transform: translateX(${distance[2]}rem) scale(0.5)}
        95% {transform: translateX(0rem) scale(1)}
      }
    </style>
  `;

  return (
    <Box {...getStyles("root")} ref={ref} {...others}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
      <span className={LoaderPropagate1Style} />
      <span className={LoaderPropagate2Style} />
      <span className={LoaderPropagate3Style} />
      <span className={LoaderPropagate4Style} />
      <span className={LoaderPropagate5Style} />
      <span className={LoaderPropagate6Style} />
    </Box>
  );
});

Propagate.displayName = "@raikou/core/Propagate";
