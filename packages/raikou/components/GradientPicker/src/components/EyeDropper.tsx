import React from "react";
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  useProps,
  Factory,
  RaikouSize,
} from "@raikou/core";
import { useEyeDropper } from "@raikou/hooks";
import { HsvaColor, colord } from "colord";
import { Button } from "../../../Button/src";
import { Text } from "../../../Text/src";
import EyedropperSVG from "./icons/eyedropper.svg";

export type EyeDropperStylesNames = "pickerInput" | "dropdown";

export interface EyeDropperProps
  extends BoxProps,
    CompoundStylesApiProps<EyeDropperFactory> {
  size?: RaikouSize;
  onChange(color: HsvaColor): void;
}

export type EyeDropperFactory = Factory<{
  props: EyeDropperProps;
  ref: HTMLDivElement;
  stylesNames: EyeDropperStylesNames;
}>;

const defaultProps: Partial<EyeDropperProps> = {
  size: "md",
};

export const EyeDropper = factory<EyeDropperFactory>((props, ref) => {
  const { classNames, className, style, styles, vars, onChange, ...others } =
    useProps("EyeDropper", defaultProps, props);

  const { supported, open } = useEyeDropper();

  const pickColor = async () => {
    try {
      const { sRGBHex: color } = await open();
      const _color = colord(color).toHsv();

      onChange(_color);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {supported && (
        <Button
          classNames={{
            root: "rounded-tr-none! rounded-br-none! group",
            label: "text-white",
            inner: "text-white",
          }}
          onClick={pickColor}
          {...others}
        >
          <Text className="w-[20px] text-center stroke-[#a6a7ab] group-hover:stroke-white mt-[4px]!">
            <EyedropperSVG />
          </Text>
        </Button>
      )}
    </>
  );
});

EyeDropper.displayName = "@raikou/core/EyeDropper";
