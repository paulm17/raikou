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
import { LoaderStageRootStyle, LoaderStageBallStyle } from "./Stage.css";
import { Fragment } from "react/jsx-runtime";

export type StageStylesNames = "root";
export type StageCssVariables = {
  root: "--stage-color" | "--stage-size";
};

export interface StageProps
  extends BoxProps,
    StylesApiProps<StageFactory>,
    ElementProps<"span"> {
  /** Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. Default value is `'md'` */
  size?: RaikouSize | (string & {}) | number;

  /** Speed multiplier, default value is `1` */
  speedMultiplier?: number;

  /** Key of `theme.colors` or any valid CSS color, default value is `theme.primaryColor`  */
  color?: RaikouColor;
}

export type StageFactory = Factory<{
  props: StageProps;
  ref: HTMLDivElement;
  stylesNames: StageStylesNames;
  vars: StageCssVariables;
}>;

const defaultProps: Partial<StageProps> = {
  size: 40,
};

const getNewSize = (size: RaikouSize | (string & {}) | number | undefined) => {
  if (typeof size === "string") {
    const sizes: Record<RaikouSize, number> = {
      xs: 20,
      sm: 24,
      md: 40,
      lg: 49,
      xl: 64,
    };

    if (size in sizes) {
      return sizes[size as RaikouSize];
    } else {
      return 36;
    }
  }

  return size;
};

const varsResolver = createVarsResolver<StageFactory>(
  // @ts-ignore
  (theme, { color, size }) => ({
    root: {
      "--stage-color": color ? getThemeColor(color, theme) : undefined,
      "--stage-size": getSize(size, "stage-size") ?? undefined,
    },
  }),
);

export const Stage = factory<StageFactory>((_props, ref) => {
  const props = useProps("Stage", defaultProps, _props);
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

  const getStyles = useStyles<StageFactory>({
    name: "Stage",
    props,
    classes: {
      root: LoaderStageRootStyle,
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
      {[...Array(3)].map((_, i) => {
        const x = i * (newSize / 2.5);
        const y = newSize / 2 - newSize / 10;

        const rawHTML = `
          <style scoped> 
            @keyframes stage-ball-motion-${i} {
              0% {
                  top: ${y}px;
                  left: ${x}px;
              }
              25% {
                  top: ${y}px;
                  left: ${x}px;
                  opacity: 0;
              }
              50% {
                  top: ${y + newSize / 2}px;
                  left: ${x}px;
                  opacity: 0;
              }
              100% {
                  top: ${y}px;
                  left: ${x}px;
                  opacity: 1;
              }
            }
          </style>
        `;

        return (
          <Fragment key={i}>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
            <span
              className={LoaderStageBallStyle}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                animation: `stage-ball-motion-${i} 1s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});

Stage.displayName = "@raikou/core/Stage";
