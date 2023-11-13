import React, { useEffect, useState } from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
  RaikouShadow,
  RaikouSize,
} from "@raikou/core";
import { Popover } from "../../../../Popover/src";
import { HsvaColor, colord } from "colord";
import { useElementSize } from "@raikou/hooks";
import { useGradientPickerContext } from "../../GradientPicker.context";
import { TransitionProps } from "../../../../Transition/src";
import { FloatingPosition } from "../../../../Floating/src";
import { ColorFormat } from "../../GradientPicker.types";
import { GradientPickerPicker } from "../picker";
import cx from "clsx";
import { Button } from "../../../../Button/src";
import { Image } from "../../../../Image/src";
import { Group } from "../../../../Group/src";
import { Stack } from "../../../../Stack/src";
import { Text } from "../../../../Text/src";
import { Tooltip } from "../../../../Tooltip/src";
import { GradientPickerColorModel } from "../colorModel";
import { GradientPickerColorGuide } from "../colorGuide";
import { GradientPickerColorSwatches } from "../swatches";
import { GradientPickerEyeDropper } from "../eyeDropper";
import { GradientPickerInputs } from "../inputs";
import { GradientPickerSaturation } from "../saturation";
import { GradientPickerHueSlider } from "../hueSlider";
import { GradientPickerAlphaSlider } from "../alphaSlider";

export type GradientPickerCompactStylesNames = "content";

export interface GradientPickerCompactProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerCompactFactory> {
  /* Picker Type */
  picker: "input" | "dropdown";

  /* Swatch Size */
  swatchSize: number;

  /** Color format */
  format?: ColorFormat | undefined;

  /** Predefined component size */
  size?: RaikouSize;

  /** Component disabled or not */
  disabled?: boolean;

  /** Predefined dropper size */
  dropperSize?: RaikouSize | number;

  /** Dropdown element z-index */
  dropdownZIndex?: number;

  /** Dropdown position */
  dropdownPosition?: FloatingPosition;

  /** Props passed down to the Transition component that used to animate 
   dropdown presence use to configure duration and animation type, 
   { duration: 150, transition: 'fade' } by default 
  */
  transitionProps?: Partial<Omit<TransitionProps, "mounted">>;

  /** Should interactive elements be focusable */
  focusable?: boolean;

  /** Saturation container aria-label */
  saturationLabel?: string;

  /** Hue slider aria-label */
  hueLabel?: string;

  /** Alpha slider aria-label */
  alphaLabel?: string;

  /** Saturation slide aria-label */
  saturationSliderLabel?: string;

  /** Lightness slide aria-label */
  lightnessSliderLabel?: string;

  /** Brightness slide aria-label */
  brightnessSliderLabel?: string;

  /** Whether to render the dropdown in a Portal */
  withinPortal?: boolean;

  /** Size of the Dropdown */
  width?: number;

  /** Dropdown box-shadow, key of theme.shadows */
  shadow?: RaikouShadow;

  /** Predefined colors */
  swatches?: string[];

  /** Number of swatches displayed in one row */
  swatchesPerRow?: number;

  /** Open Event - run when popup opens */
  onOpen?: () => void;

  /** Close Event - run when popup closes */
  onClose?: () => void;
}

export type GradientPickerCompactFactory = Factory<{
  props: GradientPickerCompactProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerCompactStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerCompactProps> = {};

type colorCtrl = "colorMode" | "colorGuide" | "none";

export const GradientPickerCompact = factory<GradientPickerCompactFactory>(
  (props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      picker,
      disabled,
      dropdownZIndex,
      dropdownPosition,
      size,
      dropperSize,
      format,
      focusable,
      saturationLabel,
      hueLabel,
      alphaLabel,
      saturationSliderLabel,
      lightnessSliderLabel,
      brightnessSliderLabel,
      transitionProps,
      withinPortal,
      width,
      swatches,
      swatchesPerRow,
      swatchSize,
      onOpen,
      onClose,
      shadow,
      ...others
    } = useProps("GradientPickerCompact", defaultProps, props);

    const [colorCtrl, toggleColorCtrl] = useState<colorCtrl>("none");
    const ctx = useGradientPickerContext();

    const { ref: pickerRef, width: elementWidth } = useElementSize();

    const handleChange = (color: HsvaColor) => {
      ctx.setColor(color);

      if (ctx.gradient !== undefined) {
        const obj = ctx.gradient?.colors.find(
          (item) => item.id === ctx.activeStopIndex,
        );

        if (obj) {
          obj.color = colord(color).toHex();
          obj.hex = colord(color).toHex();
          obj.rgb = [
            colord(color).toRgb().r,
            colord(color).toRgb().g,
            colord(color).toRgb().b,
          ];
          obj.value = [
            colord(color).toRgb().r,
            colord(color).toRgb().g,
            colord(color).toRgb().b,
            colord(color).toRgb().a,
          ];
        }
      }
    };

    console.log(elementWidth);

    // const dropperWidth = () => {
    //   const spacing = 10;

    //   if (typeof dropperSize === "number") {
    //     return dropperSize + spacing;
    //   } else if (dropperSize === "xs") {
    //     return 10 + spacing;
    //   } else if (dropperSize === "sm") {
    //     return 10 + spacing;
    //   } else if (dropperSize === "md") {
    //     return 10 + spacing;
    //   } else if (dropperSize === "lg") {
    //     return 10 + spacing;
    //   } else if (dropperSize === "xl") {
    //     return 10 + spacing;
    //   }
    // };

    const onColorCtrlChange = (value: colorCtrl) => {
      if (value === colorCtrl) {
        toggleColorCtrl("none");
      } else if (colorCtrl === "colorGuide") {
        toggleColorCtrl("colorMode");
      } else if (colorCtrl === "colorMode") {
        toggleColorCtrl("colorGuide");
      } else {
        toggleColorCtrl(value);
      }
    };

    useEffect(() => {
      if (ctx.isOpen) {
        onOpen && onOpen();
      } else {
        onClose && onClose();
      }
    }, [ctx.isOpen]);

    console.log(width);

    return (
      <Popover
        __staticSelector="Compact"
        disabled={disabled}
        position={dropdownPosition}
        offset={5}
        zIndex={dropdownZIndex}
        withinPortal={withinPortal}
        transitionProps={transitionProps}
        opened={ctx.isOpen}
        shadow={shadow}
        // styles={{ dropdown: (styles as any).pickerDropdown.dropdown }}
      >
        <Popover.Target>
          <GradientPickerPicker
            ref={pickerRef}
            disabled={disabled}
            control={picker!}
            swatchSize={swatchSize}
            className={cx("pickerInput", className)}
          />
        </Popover.Target>
        <Popover.Dropdown>
          <Stack
            gap={0}
            ref={ctx.setDropdown}
            className="gradientPicker-wrapper"
            {...others}
          >
            <GradientPickerSaturation
              value={ctx.color as HsvaColor}
              onChange={(color) => handleChange(color)}
              onChangeEnd={(color) => handleChange(color)}
              // classNames={{ saturation: classes.saturation }}
              size={size as RaikouSize}
              focusable={focusable}
              saturationLabel={saturationLabel}
            />
            <Group gap={10} mb={8}>
              <Button.Group>
                <GradientPickerEyeDropper
                  className="px-[8px]"
                  size="md"
                  onChange={(color) => handleChange(color)}
                />
                <Button
                  variant="default"
                  size="md"
                  onClick={() => onColorCtrlChange("colorMode")}
                  className="px-[4px]"
                  style={{
                    background: colorCtrl === "colorMode" ? "white" : "",
                    color: colorCtrl === "colorMode" ? "rgb(86, 140, 245)" : "",
                    borderRadius: colorCtrl === "colorMode" ? 8 : 0,
                  }}
                >
                  <Tooltip
                    label="Color Model"
                    offset={10}
                    opened={colorCtrl === "colorMode" ? false : undefined}
                  >
                    <Text className="w-[20px] text-center">
                      <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMlY4Ni43YzI4LjMgMTIuMyA0OCA0MC41IDQ4IDczLjNzLTE5LjcgNjEtNDggNzMuM1Y0ODBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWMjMzLjNDMzUuNyAyMjEgMTYgMTkyLjggMTYgMTYwczE5LjctNjEgNDgtNzMuM1YzMkM2NCAxNC4zIDc4LjMgMCA5NiAwem0wIDE5MmEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6TTI1NiAzODRhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0em04MC0zMmMwIDMyLjgtMTkuNyA2MS00OCA3My4zVjQ4MGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMlY0MjUuM2MtMjguMy0xMi4zLTQ4LTQwLjUtNDgtNzMuM3MxOS43LTYxIDQ4LTczLjNWMzJjMC0xNy43IDE0LjMtMzIgMzItMzJzMzIgMTQuMyAzMiAzMlYyNzguN2MyOC4zIDEyLjMgNDggNDAuNSA0OCA3My4zek00NDggMTkyYTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6bTAgNzMuM1Y0ODBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWMjY1LjNjLTI4LjMtMTIuMy00OC00MC41LTQ4LTczLjNzMTkuNy02MSA0OC03My4zVjMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyczMyIDE0LjMgMzIgMzJ2ODYuN2MyOC4zIDEyLjMgNDggNDAuNSA0OCA3My4zcy0xOS43IDYxLTQ4IDczLjN6Ii8+PC9zdmc+" />
                    </Text>
                  </Tooltip>
                </Button>
                <Button
                  variant="default"
                  size="md"
                  onClick={() => onColorCtrlChange("colorGuide")}
                  className="px-[4px]"
                  style={{
                    background: colorCtrl === "colorGuide" ? "white" : "",
                    color:
                      colorCtrl === "colorGuide" ? "rgb(86, 140, 245)" : "",
                    borderRadius: colorCtrl === "colorGuide" ? 8 : 0,
                  }}
                >
                  <Tooltip
                    label="Color Guide"
                    offset={10}
                    opened={colorCtrl === "colorGuide" ? false : undefined}
                  >
                    <Text className="w-[20px] text-center">
                      <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDI1NmMwIC45IDAgMS44IDAgMi43Yy0uNCAzNi41LTMzLjYgNjEuMy03MC4xIDYxLjNIMzQ0Yy0yNi41IDAtNDggMjEuNS00OCA0OGMwIDMuNCAuNCA2LjcgMSA5LjljMi4xIDEwLjIgNi41IDIwIDEwLjggMjkuOWM2LjEgMTMuOCAxMi4xIDI3LjUgMTIuMSA0MmMwIDMxLjgtMjEuNiA2MC43LTUzLjQgNjJjLTMuNSAuMS03IC4yLTEwLjYgLjJDMTE0LjYgNTEyIDAgMzk3LjQgMCAyNTZTMTE0LjYgMCAyNTYgMFM1MTIgMTE0LjYgNTEyIDI1NnpNMTI4IDI4OGEzMiAzMiAwIDEgMCAtNjQgMCAzMiAzMiAwIDEgMCA2NCAwem0wLTk2YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHpNMjg4IDk2YTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6bTk2IDk2YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=" />
                    </Text>
                  </Tooltip>
                </Button>
              </Button.Group>
              <Box className="calc(100%_-_102px)">
                <GradientPickerHueSlider
                  value={ctx.color?.h}
                  onChange={(h) =>
                    handleChange({
                      h: h,
                      // @ts-ignore
                      s: ctx.color.s,
                      // @ts-ignore
                      v: ctx.color.v,
                      // @ts-ignore
                      a: ctx.color.a,
                    })
                  }
                  onChangeEnd={(h) =>
                    handleChange({
                      h: h,
                      // @ts-ignore
                      s: ctx.color.s,
                      // @ts-ignore
                      v: ctx.color.v,
                      // @ts-ignore
                      a: ctx.color.a,
                    })
                  }
                  size={size}
                  aria-label={hueLabel}
                />
                <GradientPickerAlphaSlider
                  value={ctx.color?.a}
                  onChange={(a) =>
                    handleChange({
                      // @ts-ignore
                      h: ctx.color.h,
                      // @ts-ignore
                      s: ctx.color.s,
                      // @ts-ignore
                      v: ctx.color.v,
                      a: a,
                    })
                  }
                  onChangeEnd={(a) =>
                    handleChange({
                      // @ts-ignore
                      h: ctx.color.h,
                      // @ts-ignore
                      s: ctx.color.s,
                      // @ts-ignore
                      v: ctx.color.v,
                      a: a,
                    })
                  }
                  size={size}
                  color={colord(ctx.color as HsvaColor)
                    .toHex()
                    .toString()}
                  style={{ marginTop: 6 }}
                  aria-label={alphaLabel}
                />
              </Box>
            </Group>
            {/* {colorCtrl === "colorMode" && (
              <GradientPickerColorModel
                mb={10}
                value={ctx.color as HsvaColor}
                onChange={(color) => handleChange(color)}
                saturationSliderLabel={saturationSliderLabel}
                lightnessSliderLabel={lightnessSliderLabel}
                brightnessSliderLabel={brightnessSliderLabel}
                focusable={focusable}
              />
            )} */}
            {/* {colorCtrl === "colorGuide" && (
              <GradientPickerColorGuide
                mb={10}
                value={ctx.color as HsvaColor}
                onChange={(color) => handleChange(color)}
              />
            )} */}
            {/* <GradientPickerInputs
              format={format}
              className={cx("format", className)}
              // styles={(styles as any).format}
            /> */}
            {/* {Array.isArray(swatches) && (
              <Box className={cx("swatches", className)}>
                <GradientPickerColorSwatches
                  data={swatches}
                  swatchesPerRow={swatchesPerRow}
                  focusable={focusable}
                  setValue={(color) => {
                    handleChange(color);
                  }}
                />
              </Box>
            )} */}
          </Stack>
        </Popover.Dropdown>
      </Popover>
    );
  },
);

GradientPickerCompact.displayName = "@raikou/core/GradientPickerCompact";
