import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
} from "@raikou/core";
import { TextInput } from "../../../../TextInput/src";
import { Stack } from "../../../../Stack/src";
import { ColorSwatch } from "../../../../ColorSwatch/src";
import { useGradientPickerContext } from "../../GradientPicker.context";
import cx from "clsx";
import { HsvaColor, colord } from "colord";

export type GradientPickerPickerStylesNames = "pickerInput" | "dropdown";

export interface GradientPickerPickerProps
  extends BoxProps,
    CompoundStylesApiProps<GradientPickerPickerFactory> {
  disabled?: boolean;
  swatchSize?: number;
  control: "input" | "dropdown";
}

export type GradientPickerPickerFactory = Factory<{
  props: GradientPickerPickerProps;
  ref: HTMLDivElement;
  stylesNames: GradientPickerPickerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<GradientPickerPickerProps> = {
  disabled: false,
  swatchSize: 24,
  control: "input",
};

export const GradientPickerPicker = factory<GradientPickerPickerFactory>(
  (props, ref) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      disabled,
      swatchSize,
      control,
      ...others
    } = useProps("GradientPickerPicker", defaultProps, props);

    const ctx = useGradientPickerContext();

    return (
      <>
        {control === "input" && (
          <Box ref={ref}>
            <TextInput
              ref={ctx.setControl}
              autoComplete="off"
              readOnly
              className={cx("pickerInput", className)}
              value={colord(ctx.color as HsvaColor).toRgbString()}
              styles={{
                root: { userSelect: "none" },
                input: {
                  fontSize: "11px",
                  cursor: disabled ? "not-allowed" : "default",
                  userSelect: "none",
                  opacity: disabled! ? 0.4 : 1,
                },
                section: {
                  width: "25px",
                  pointerEvents: "all",
                },
              }}
              onClick={() => ctx.toggleOpen()}
              leftSection={
                <ColorSwatch
                  component="button"
                  color={colord(ctx.color as HsvaColor)
                    .toHex()
                    .toString()}
                  radius={0}
                  size={swatchSize}
                />
              }
              {...others}
            />
          </Box>
        )}
        {control === "dropdown" && (
          <Stack
            //ref={ref}
            className={cx("dropdown", "rgba(156,163,175)", className)}
          >
            <></>
          </Stack>
        )}
      </>
    );
  },
);

GradientPickerPicker.displayName = "@raikou/core/GradientPickerPicker";
