import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  Box,
} from "@raikou/core";
import { TextInput } from "../../../TextInput/src";
import { Stack } from "../../../Stack/src";
import { ColorSwatch } from "../../../ColorSwatch/src";
import { useGradientPickerContext } from "../GradientPicker.context";
import { HsvaColor, colord } from "colord";
import { cssGradient } from "./utils";
import { UnstyledButton } from "../../../UnstyledButton/src";
import { Group } from "../../../Group/src";
import { Text } from "../../../Text/src";
import CaretUp from "./icons/caretUp.svg";
import CaretDown from "./icons/caretDown.svg";

export type PickerStylesNames = "pickerInput" | "dropdown";

export interface PickerProps
  extends BoxProps,
    CompoundStylesApiProps<PickerFactory> {
  disabled?: boolean;
  swatchSize?: number;
  control: "input" | "dropdown";
}

export type PickerFactory = Factory<{
  props: PickerProps;
  ref: HTMLDivElement;
  stylesNames: PickerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<PickerProps> = {
  disabled: false,
  swatchSize: 24,
  control: "input",
};

export const Picker = factory<PickerFactory>((props, ref) => {
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
  } = useProps("Picker", defaultProps, props);

  const ctx = useGradientPickerContext();

  const background = () => {
    if (ctx.gradient === undefined) {
      return colord(ctx.color!).toRgbString();
    } else {
      return cssGradient([ctx.gradient], "single_gradient");
    }
  };

  return (
    <>
      {control === "input" && (
        <Box ref={ref}>
          <TextInput
            ref={ctx.setControl}
            autoComplete="off"
            readOnly
            value={background()}
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
              ctx.gradient === undefined ? (
                <ColorSwatch
                  component="button"
                  color={colord(ctx.color as HsvaColor)
                    .toHex()
                    .toString()}
                  radius={0}
                  size={swatchSize}
                />
              ) : (
                <Box
                  style={{
                    backgroundImage: background(),
                    width: "18px",
                    height: "18px",
                    position: "relative",
                    display: "block",
                  }}
                />
              )
            }
            {...others}
          />
        </Box>
      )}
      {control === "dropdown" && (
        <Stack ref={ref} className="bg-[rgba(156,163,175)]" {...others}>
          <UnstyledButton ref={ctx.setControl} onClick={() => ctx.toggleOpen()}>
            <Group gap={0} className="p-[4px]">
              <Box
                className="flex flex-1 mr-[3px] h-[1.75rem] border-2 border-solid border-[rgb(209,213,219)]"
                style={{
                  background: background(),
                }}
              />
              <Text className="text-black text-[14px] p-[3px]">
                {!ctx.isOpen ? <CaretDown /> : <CaretUp />}
              </Text>
            </Group>
          </UnstyledButton>
        </Stack>
      )}
    </>
  );
});

Picker.displayName = "@raikou/core/Picker";
