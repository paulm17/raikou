import React, { MouseEvent, useRef } from "react";
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  RaikouSize,
  rem,
  StylesApiProps,
  useRaikouTheme,
  useProps,
  useStyles,
} from "@raikou/core";
import classes from "../../../../../ColorPicker/src/ColorPicker.module.css";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { Thumb } from "./thumb";
import { mergeRefs } from "@raikou/hooks";
import {
  genRandomId,
  resolveColorStopPosition,
  simplifyEvent,
  sortByPosition,
  writeGradientColor,
} from "../../utils";
import {
  GradientColor,
  GradientHint,
  GradientObj,
} from "../../../GradientPicker.types";
import { writeHintData } from "../../utils/editor";
import { parseColor } from "../../../../../ColorPicker/src";

export type ColorSliderStylesNames = "slider" | "sliderOverlay" | "thumb";

export interface __ColorSliderProps extends ElementProps<"div", "onChange"> {
  onScrubStart?: () => void;
  onScrubEnd?: () => void;
  size?: RaikouSize | (string & {});
  focusable?: boolean;
}

export interface ColorSliderProps
  extends BoxProps,
    StylesApiProps<ColorSliderFactory>,
    __ColorSliderProps,
    ElementProps<"div", "onChange"> {
  __staticSelector?: string;
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
  activeStopIndex?: number;
}

export type ColorSliderFactory = Factory<{
  props: ColorSliderProps;
  ref: HTMLDivElement;
  stylesNames: ColorSliderStylesNames;
}>;

const defaultProps: Partial<ColorSliderProps> = {};

export const ColorSlider = factory<ColorSliderFactory>((_props, ref) => {
  const props = useProps("ColorSlider", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    maxValue,
    round,
    size = "md",
    focusable = true,
    overlays,
    onScrubStart,
    onScrubEnd,
    __staticSelector = "ColorPicker",
    activeStopIndex,
    ...others
  } = props;

  const getStyles = useStyles<ColorSliderFactory>({
    name: __staticSelector,
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const theme = useRaikouTheme();
  const ctx = useGradientPickerContext();
  const stopsRef = useRef<HTMLDivElement | null>(null);

  const layers = overlays.map((overlay, index) => (
    <div {...getStyles("sliderOverlay")} style={overlay} key={index} />
  ));

  const getIndex = (id: string, gradient: GradientObj) => {
    return gradient?.colors.findIndex((item) => item.id === id);
  };

  const onStopAdd = (e: MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    const parent = target.parentElement as HTMLDivElement;
    // @ts-ignore
    const index = [...parent.querySelectorAll(".colorpicker-thumb")].indexOf(
      target,
    );

    if (index === -1) {
      const stopsContainer = stopsRef.current;
      const value = ctx.gradient?.colors[0].color!;
      const { x } = simplifyEvent(e);
      const position = resolveColorStopPosition(stopsContainer, x) * 100;
      const id = genRandomId();
      const newColor = writeGradientColor(id, value, position);

      let gradient = { ...ctx.gradient } as GradientObj;

      gradient?.colors.push(newColor as GradientColor);
      sortByPosition(gradient?.colors, true);

      gradient?.hints.push({ percentage: 50 } as GradientHint);
      writeHintData(gradient?.colors, gradient?.hints, true);

      ctx.setGradient(gradient);

      const index = getIndex(id, gradient);
      ctx.setMovingStopIndex(index);
      ctx.setActiveStopIndex(index);

      console.log(index);

      ctx.setColor(parseColor(newColor.color));
    }
  };

  return (
    <Box
      {...others}
      ref={mergeRefs(stopsRef, ref)}
      {...getStyles("slider")}
      role="slider"
      aria-valuemax={maxValue}
      aria-valuemin={0}
      tabIndex={focusable ? 0 : -1}
      data-focus-ring={theme.focusRing}
      onMouseDown={onStopAdd}
      __vars={{
        "--cp-thumb-size": `var(--cp-thumb-size-${size})`,
      }}
    >
      {layers}

      {ctx.gradient?.colors.map((color, index) => (
        <Thumb
          key={index}
          position={{ x: color.position, y: 0 }}
          stopIndex={getIndex(color.id)}
          stopsRef={stopsRef}
          {...getStyles("thumb", {
            style: { top: rem(1), background: color.hex },
          })}
        />
      ))}
    </Box>
  );
});

ColorSlider.displayName = "@raikou/core/ColorSlider";
