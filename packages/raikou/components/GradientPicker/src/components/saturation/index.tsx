import React, { useEffect, useRef, useState } from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
  RaikouSize,
} from "@raikou/core";
import { GradientPickerThumb } from "../thumb";
import { HsvaColor, colord } from "colord";
import { UseMovePosition, clampUseMovePosition, useMove } from "@raikou/hooks";

export type GradientPickerSaturationStylesNames =
  | "saturation"
  | "saturationThumb"
  | "saturationOverlay";

export interface GradientPickerSaturationProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerSaturationFactory> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
  onChangeEnd(color: HsvaColor): void;
  saturationLabel?: string;
  size: RaikouSize;
  focusable?: boolean;
}

export type GradientPickerSaturationFactory = Factory<{
  props: GradientPickerSaturationProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerSaturationStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerSaturationProps> = {
  focusable: true,
};

export const GradientPickerSaturation =
  factory<GradientPickerSaturationFactory>((props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      value,
      size,
      saturationLabel,
      focusable,
      onChange,
      onChangeEnd,
      ...others
    } = useProps("GradientPickerSaturation", defaultProps, props);

    const [position, setPosition] = useState({
      x: value.s / 100,
      y: 1 - value.v / 100,
    });
    const positionRef = useRef(position);

    const { ref: moveRef } = useMove(
      ({ x, y }) => {
        positionRef.current = { x, y };

        onChange({
          h: value.h,
          s: Math.round(x * 100),
          v: Math.round((1 - y) * 100),
          a: value.a,
        });
      },
      {
        onScrubEnd: () => {
          const { x, y } = positionRef.current;
          onChangeEnd({
            h: value.h,
            s: Math.round(x * 100),
            v: Math.round((1 - y) * 100),
            a: value.a,
          });
        },
      },
    );

    useEffect(() => {
      setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
    }, [value.s, value.v]);

    const handleArrow = (
      event: React.KeyboardEvent<HTMLDivElement>,
      pos: UseMovePosition,
    ) => {
      event.preventDefault();
      const _position = clampUseMovePosition(pos);
      const _color = {
        h: value.h,
        s: Math.round(_position.x * 100),
        v: Math.round((1 - _position.y) * 100),
        a: value.a,
      };
      onChange(_color);
      onChangeEnd(_color);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case "ArrowUp": {
          handleArrow(event, { y: position.y - 0.05, x: position.x });
          break;
        }

        case "ArrowDown": {
          handleArrow(event, { y: position.y + 0.05, x: position.x });
          break;
        }

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

    return (
      <Box
        className="gradientPicker-saturation"
        ref={moveRef as React.MutableRefObject<HTMLDivElement>}
        role="slider"
        aria-label={saturationLabel}
        aria-valuenow={position.x}
        aria-valuetext={colord(value).toRgbString()}
        tabIndex={focusable ? 0 : -1}
        onKeyDown={handleKeyDown}
        style={{ height: "194px" }}
        {...others}
      >
        <div
          className="gradientPicker-saturationOverlay"
          style={{ backgroundColor: `hsl(${value.h}, 100%, 50%)` }}
        />
        <div
          className="gradientPicker-saturationOverlay"
          style={{
            backgroundImage: "linear-gradient(90deg, #fff, transparent)",
          }}
        />
        <div
          className="gradientPicker-saturationOverlay"
          style={{
            backgroundImage: "linear-gradient(0deg, #000, transparent)",
          }}
        />
        <GradientPickerThumb
          // styles={styles}
          position={position}
          style={{ backgroundColor: colord(value).toRgbString() }}
          size={size}
        />
      </Box>
    );
  });

GradientPickerSaturation.displayName = "@raikou/core/GradientPickerSaturation";
