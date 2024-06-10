import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  BoxProps,
  StylesApiProps,
  ElementProps,
  useProps,
  // useStyles,
  // createVarsResolver,
  Factory,
  useStyles,
  ExtendComponent,
  RaikouThemeComponent,
  RaikouSize,
  RaikouShadow,
  // ExtendComponent,
  // RaikouThemeComponent,
} from "@raikou/core";
import isEqual from "lodash.isequal";
import { GradientPickerProvider } from "./GradientPicker.context";
import {
  cssGradient,
  getGradientObject,
  isGradient,
  sortByPosition,
} from "./components/utils";
// import { HsvaColor, colord } from "colord";
import {
  useClickOutside,
  useDidUpdate,
  useElementSize,
  useToggle,
} from "@raikou/hooks";
import {
  ColorPickerType,
  GradientObj,
  GradientType,
} from "./GradientPicker.types";
import { FloatingPosition } from "../../Floating/src";
import { TransitionProps } from "../../Transition/src";
import { Popover } from "../../Popover/src";
import { Stack } from "../../Stack/src";
import { Group } from "../../Group/src";
import { Picker } from "./components/Picker";
import {
  AlphaSlider,
  HsvaColor,
  HueSlider,
  Saturation,
  convertHsvaTo,
  parseColor,
} from "../../ColorPicker/src";
import { Controls } from "./components/Controls";
import { Inputs } from "./components/Inputs";
import { Grid } from "../../Grid/src";
import { Swatches } from "../../ColorPicker/src/Swatches/Swatches";
import { ColorSwatch } from "../../ColorSwatch/src";
import { ColorModel } from "./components/colorModel";
import { ColorGuide } from "./components/ColorGuide";
import {
  GradientPointer,
  GradientMode,
  GradientControls,
  GradientControlLinear,
  GradientControlRadial,
  GradientControlConic,
  // GradientControls,
  // GradientControlLinear,
  // GradientControlRadial,
  // GradientControlConic,
} from "./components/gradient";
import { ColorFormat } from "../../ColorPicker/src/ColorPicker.types";
import { GradientSlider } from "./components/gradient/gradientSlider";

export type GradientPickerStylesNames = "root";

export interface GradientPickerProps
  extends BoxProps,
    StylesApiProps<GradientPickerFactory>,
    ElementProps<"div", "value" | "defaultValue" | "onChange"> {
  /** Type of gradient picker **/
  type: ColorPickerType;

  /** Value for controlled component */
  value: string;

  /** Called when value changes */
  onChange(value: string): void;

  /** Picker Type **/
  picker: "input" | "dropdown";

  /* Swatch Size */
  swatchSize: number;

  /** Color format */
  format?: ColorFormat;

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

export type GradientPickerFactory = Factory<{
  props: GradientPickerProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerStylesNames;
  // vars: GradientPickerCssVariables;
}>;

const defaultProps: Partial<GradientPickerProps> = {
  type: "gradient",
  format: "rgba",
};

export function GradientPicker(_props: GradientPickerProps) {
  const props = useProps(
    "GradientPicker",
    defaultProps as GradientPickerProps,
    _props,
  );
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    type,
    value,
    onChange,
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
  } = props;

  const getStyles = useStyles<GradientPickerFactory>({
    name: "GradientPicker",
    classes: {
      root: "gradientPicker-root",
    },
    props: props as GradientPickerProps,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    // varsResolver,
  });

  const [update, setUpdate] = useState(true);
  const [formatValue, setFormatValue] = useState<ColorFormat>(format!);
  const [colorModelOpened, toggleColorModel] = useToggle([false, true]);
  const [colorGuideOpened, toggleColorGuide] = useToggle([false, true]);
  const [isOpen, toggleOpen] = useToggle([false, true]);
  const [control, setControl] = useState<HTMLElement | null>(null);
  const [dropdown, setDropdown] = useState<HTMLElement | null>(null);
  const [color, setColor] = useState<HsvaColor>(parseColor(value));
  const { ref: pickerRef, width: elementWidth } = useElementSize();

  useClickOutside(() => toggleOpen(false), null, [control, dropdown]);

  // Gradient
  const [activeStopIndex, setActiveStopIndex] = useState(-1);
  const [movingStopIndex, setMovingStopIndex] = useState(-1);
  const [isLinearActive, setLinearActive] = useState(false);
  const [gradient, setGradient] = useState<GradientObj | undefined>(undefined);
  const gradientTypes = ["linear", "radial"] as GradientType[];

  const valueRef = useRef<string>();
  const formatRef = useRef(format);
  const scrubTimeoutRef = useRef<number>(-1);
  const isScrubbingRef = useRef(false);

  // Check if conic-gradient is supported
  if (typeof window !== "undefined") {
    if (CSS.supports("background-image", "conic-gradient(#fff, #fff)")) {
      gradientTypes.push("conic");
    }
  }

  const startScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    isScrubbingRef.current = true;
  };

  const stopScrubbing = () => {
    window.clearTimeout(scrubTimeoutRef.current);
    scrubTimeoutRef.current = window.setTimeout(() => {
      isScrubbingRef.current = false;
    }, 200);
  };

  const handleChange = (color: HsvaColor) => {
    setColor((current) => {
      const next = { ...current, ...color };
      valueRef.current = convertHsvaTo(formatRef.current!, next);
      return next;
    });

    if (gradient !== undefined) {
      const obj = gradient?.colors[activeStopIndex];

      if (obj) {
        const rgbArray = [] as number[];
        const rgbaArray = [] as number[];
        const hex = convertHsvaTo("hex", color);
        const rgba = convertHsvaTo("rgb", color);

        rgba.match(/[\d+]+/g)!.forEach((item) => {
          rgbArray.push(parseInt(item));
        });

        rgba.match(/[\d+]+/g)!.forEach((item) => {
          rgbaArray.push(parseInt(item));
        });

        obj.color = hex;
        obj.hex = hex;
        obj.rgb = rgbaArray.splice(0, 3);
        obj.value = rgbaArray;
      }
    }
  };

  // console.log(gradient?.colors);

  return (
    <GradientPickerProvider
      value={{
        type,
        color,
        gradient,
        isOpen,
        isLinearActive,
        activeStopIndex,
        movingStopIndex,
        control,
        dropdown,
        formatValue,
        gradientTypes,
        setColor,
        setGradient,
        onChange,
        toggleOpen,
        setControl,
        setDropdown,
        setLinearActive,
        setActiveStopIndex,
        setMovingStopIndex,
        setFormatValue,
        getStyles,
      }}
    >
      <Box {...getStyles("root")} {...others}>
        <Popover
          __staticSelector="Base"
          disabled={disabled}
          position={dropdownPosition}
          offset={5}
          zIndex={dropdownZIndex}
          withinPortal={withinPortal}
          transitionProps={transitionProps}
          opened={isOpen}
          shadow={shadow}
        >
          <Popover.Target>
            <Picker
              ref={pickerRef}
              disabled={disabled}
              control={picker!}
              swatchSize={swatchSize}
            />
          </Popover.Target>
          <Popover.Dropdown p={6}>
            <Stack
              gap={8}
              ref={setDropdown}
              style={{ width: width != undefined ? width : elementWidth }}
              {...others}
            >
              <Group gap={0} justify="space-between" grow>
                <Box
                  className={gradient === undefined ? "w-full" : ""}
                  mr={gradient !== undefined ? 4 : 0}
                >
                  <Saturation
                    value={color as HsvaColor}
                    onChange={({ s, v }) =>
                      handleChange({ ...color, s: s!, v: v! })
                    }
                    onChangeEnd={({ s, v }) =>
                      handleChange({ ...color, s: s!, v: v! })
                    }
                    color={convertHsvaTo("hex", color)}
                    size={size as RaikouSize}
                    focusable={focusable}
                    saturationLabel={saturationLabel}
                    onScrubStart={startScrubbing}
                    onScrubEnd={stopScrubbing}
                  />
                </Box>
                {gradient !== undefined && (
                  <Box ml={4}>
                    <GradientPointer>
                      <GradientMode />
                    </GradientPointer>
                  </Box>
                )}
              </Group>
              <Controls
                colorModelOpened={colorModelOpened}
                colorGuideOpened={colorGuideOpened}
                toggleColorModel={toggleColorModel}
                toggleColorGuide={toggleColorGuide}
              />
              {gradient !== undefined && (
                <Stack gap={4} className="p-[4px] bg-[#1f1f1f]">
                  <GradientControls />
                  {gradient.type === "linear" && <GradientControlLinear />}
                  {gradient.type === "radial" && <GradientControlRadial />}
                  {gradient.type === "conic" && <GradientControlConic />}
                </Stack>
              )}
              {colorModelOpened && (
                <Box mb={8}>
                  <ColorModel
                    value={color as HsvaColor}
                    onChange={(color) => handleChange(color)}
                    saturationSliderLabel={saturationSliderLabel}
                    lightnessSliderLabel={lightnessSliderLabel}
                    brightnessSliderLabel={brightnessSliderLabel}
                    focusable={focusable}
                  />
                </Box>
              )}
              {colorGuideOpened && (
                <Box mb={8}>
                  <ColorGuide
                    value={color as HsvaColor}
                    onChange={(color) => handleChange(color)}
                  />
                </Box>
              )}
              {gradient !== undefined && (
                <GradientSlider
                  size={size}
                  onScrubStart={startScrubbing}
                  onScrubEnd={stopScrubbing}
                />
              )}
              <HueSlider
                value={color?.h!}
                onChange={(h) => handleChange({ ...color, h })}
                onChangeEnd={(h) => handleChange({ ...color, h })}
                size={size}
                aria-label={hueLabel}
                onScrubStart={startScrubbing}
                onScrubEnd={stopScrubbing}
              />
              <AlphaSlider
                value={color?.a!}
                onChange={(a) => handleChange({ ...color, a })}
                onChangeEnd={(a) => handleChange({ ...color, a })}
                size={size}
                color={convertHsvaTo("hex", color)}
                style={{ marginTop: 6 }}
                aria-label={alphaLabel}
                onScrubStart={startScrubbing}
                onScrubEnd={stopScrubbing}
              />
              <Inputs format={format!} />
              <Grid>
                <Grid.Col span={3}>
                  <ColorSwatch
                    color={convertHsvaTo("hex", color)}
                    radius="sm"
                    className="w-full! h-full!"
                  />
                </Grid.Col>
                <Grid.Col span="auto">
                  <Swatches
                    data={swatches!}
                    swatchesPerRow={swatchesPerRow}
                    focusable={focusable}
                    setValue={(color) => {
                      handleChange(parseColor(color));
                    }}
                    style={{ marginTop: 0 }}
                  />
                </Grid.Col>
              </Grid>
            </Stack>
          </Popover.Dropdown>
        </Popover>
      </Box>
    </GradientPickerProvider>
  );
}

const extendGradientPicker = (
  c: ExtendComponent<GradientPickerFactory>,
): RaikouThemeComponent => c;

GradientPicker.extend = extendGradientPicker;
