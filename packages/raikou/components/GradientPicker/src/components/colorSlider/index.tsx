import React, { useRef, useState } from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
  RaikouSize,
} from "@raikou/core";
import {
  UseMovePosition,
  clampUseMovePosition,
  useDidUpdate,
  useMergedRef,
  useMove,
} from "@raikou/hooks";
import cx from "clsx";
import { GradientPickerThumb } from "../thumb";
export type { SliderBaseProps } from "../../../../Slider/src";

export type GradientPickerColorSliderStylesNames = "root" | "thumb";

export interface GradientPickerColorSliderProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerColorSliderFactory> {
  value: number;
  onChange(value: number): void;
  onChangeEnd(value: number): void;
  size?: RaikouSize;
  focusable?: boolean;
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
}

export type GradientPickerColorSliderFactory = Factory<{
  props: GradientPickerColorSliderProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerColorSliderStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerColorSliderProps> = {
  size: "md",
  focusable: true,
};

export const GradientPickerColorSlider =
  factory<GradientPickerColorSliderFactory>((props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      value,
      onChange,
      onChangeEnd,
      maxValue,
      round,
      size,
      focusable,
      overlays,
      ...others
    } = useProps("GradientPickerColorSlider", defaultProps, props);

    const [position, setPosition] = useState({ y: 0, x: value / maxValue });
    const positionRef = useRef(position);
    const getChangeValue = (val: number) =>
      round ? Math.round(val * maxValue) : val * maxValue;
    const { ref: sliderRef } = useMove(
      ({ x, y }) => {
        positionRef.current = { x, y };
        onChange(getChangeValue(x));
      },
      {
        onScrubEnd: () => {
          const { x } = positionRef.current;
          onChangeEnd(getChangeValue(x));
        },
      },
    );

    useDidUpdate(() => {
      setPosition({ y: 0, x: value / maxValue });
    }, [value]);

    const handleArrow = (
      event: React.KeyboardEvent<HTMLDivElement>,
      pos: UseMovePosition,
    ) => {
      event.preventDefault();
      const _position = clampUseMovePosition(pos);
      onChange(getChangeValue(_position.x));
      onChangeEnd(getChangeValue(_position.x));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "ArrowRight": {
          handleArrow(event, { x: position.x + 0.05, y: position.y });
          break;
        }

        case "ArrowLeft": {
          handleArrow(event, { x: position.x - 0.05, y: position.y });
          break;
        }
      }
    };

    const layers = overlays
      ? overlays.map((overlay, index) => (
          <div className={"sliderOverlay"} style={overlay} key={index} />
        ))
      : null;

    return (
      <Box
        {...others}
        ref={useMergedRef(sliderRef, ref)}
        className={cx("slider", className)}
        role="slider"
        aria-valuenow={value}
        aria-valuemax={maxValue}
        aria-valuemin={0}
        tabIndex={focusable ? 0 : -1}
        onKeyDown={handleKeyDown}
      >
        {layers}

        <GradientPickerThumb
          classNames={classNames}
          styles={styles}
          position={position}
          // style={{ top: 1, backgroundColor: thumbColor }}
          className={"sliderThumb"}
          size={size as RaikouSize}
        />
      </Box>
    );
  });

GradientPickerColorSlider.displayName =
  "@raikou/core/GradientPickerColorSlider";
