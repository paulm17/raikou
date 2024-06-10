import React, { SetStateAction, forwardRef } from "react";
import { Group } from "../../../Group/src";
import { SegmentedControl } from "../../../SegmentedControl/src";
import { useGradientPickerContext } from "../GradientPicker.context";
import { useToggle } from "@raikou/hooks";
import { cssGradient, getGradientObject } from "./utils";
import { GradientObj } from "../GradientPicker.types";
import { colord } from "colord";
import { EyeDropper } from "./EyeDropper";
import { HsvaColor } from "../../../ColorPicker/src";
import { Button } from "../../../Button/src";
import { Tooltip } from "../../../Tooltip/src";
import { Text } from "../../../Text/src";
import { Menu } from "../../../Menu/src";
import PaletteSVG from "./icons/palette.svg";
import SlidersSVG from "./icons/sliders.svg";
import ColorFormatPickerSVG from "./icons/colorFormatPicker.svg";
import { ColorFormat } from "../../../ColorPicker/src/ColorPicker.types";

export interface ControlsProps extends React.ComponentPropsWithoutRef<"div"> {
  colorGuideOpened: boolean;
  colorModelOpened: boolean;
  toggleColorGuide: (value?: React.SetStateAction<boolean> | undefined) => void;
  toggleColorModel: (value?: React.SetStateAction<boolean> | undefined) => void;
}

export const Controls = forwardRef<HTMLDivElement, ControlsProps>(
  (
    {
      colorGuideOpened,
      toggleColorGuide,
      colorModelOpened,
      toggleColorModel,
      ...others
    },
    ref,
  ) => {
    const [activeColorFormat, toggleColorFormat] = useToggle([false, true]);
    const ctx = useGradientPickerContext();

    const onColorTypeChange = (type: string) => {
      if (type === "gradient" && ctx.gradient === undefined) {
        const gradientObject: GradientObj = getGradientObject(
          `background: linear-gradient(90deg, ${colord(ctx.color!)
            ?.toRgb()
            .toString()}, rgb(76, 195, 255));`,
        );

        ctx.setGradient(gradientObject);
        ctx.setActiveStopIndex(0);
      } else {
        ctx.setGradient(undefined);
      }
    };

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

    const formatValues: ColorFormat[] = ["rgba", "hsla", "hsva", "cmyk"];

    const colorType = () => {
      if (ctx.gradient === undefined) {
        return "solid";
      } else {
        return "gradient";
      }
    };

    return (
      <Group
        justify={ctx.type === "gradient" ? "space-between" : "end"}
        gap={0}
        ref={ref}
        {...others}
      >
        {ctx.type === "gradient" && (
          <SegmentedControl
            size="xs"
            value={colorType()}
            onChange={(value) => onColorTypeChange(value)}
            data={[
              { value: "solid", label: "Solid" },
              { value: "gradient", label: "Gradient" },
            ]}
          />
        )}
        <Group gap={0}>
          <EyeDropper
            variant="default"
            className="px-[8px]"
            size="sm"
            onChange={(color) => handleChange(color)}
          />
          <Tooltip
            label="Color Model"
            offset={10}
            opened={colorModelOpened ? false : undefined}
          >
            <Button
              variant="default"
              size="sm"
              onClick={() => toggleColorModel()}
              className={`px-[4px] rounded-none! group ${
                colorModelOpened ? "bg-[#141517]!" : ""
              }`}
            >
              <Text
                className={`w-[20px] text-center mt-[4px]! ${
                  colorModelOpened
                    ? "bg-[#141517]! stroke-white group-hover:stroke-white"
                    : "stroke-[#a6a7ab] group-hover:stroke-white"
                }`}
              >
                <SlidersSVG />
              </Text>
            </Button>
          </Tooltip>
          <Tooltip
            label="Color Guide"
            offset={10}
            opened={colorGuideOpened ? false : undefined}
          >
            <Button
              variant="default"
              size="sm"
              onClick={() => toggleColorGuide()}
              className={`px-[4px] rounded-none! group ${
                colorGuideOpened ? "bg-[#141517]!" : ""
              }`}
            >
              <Text
                className={`w-[20px] text-center mt-[4px]! ${
                  colorGuideOpened
                    ? "bg-[#141517]! stroke-white group-hover:stroke-white"
                    : "stroke-[#a6a7ab] group-hover:stroke-white"
                }`}
              >
                <PaletteSVG />
              </Text>
            </Button>
          </Tooltip>
          <Menu
            shadow="md"
            width={60}
            opened={activeColorFormat}
            onChange={!activeColorFormat ? () => {} : toggleColorFormat}
            position="bottom-end"
            classNames={{
              item: "p-[5px]!",
            }}
          >
            <Menu.Target>
              <Tooltip
                label="Toggle Color Format"
                offset={10}
                opened={activeColorFormat ? false : undefined}
              >
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => toggleColorFormat()}
                  style={{ "--button-padding-x": "20px" }}
                  classNames={{
                    root: `rounded-tl-none! rounded-bl-none! group ${
                      activeColorFormat ? "bg-[#141517]!" : ""
                    }`,
                  }}
                >
                  <Text
                    classNames={{
                      root: `w-[24px] scale-125 group-hover:stroke-white mt-[2px]! ${
                        activeColorFormat
                          ? "stroke-white group-hover:stroke-white"
                          : "stroke-[#a6a7ab] group-hover:stroke-white"
                      }`,
                    }}
                  >
                    <ColorFormatPickerSVG />
                  </Text>
                </Button>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown>
              {formatValues.map((format) => (
                <Menu.Item
                  key={format}
                  className={
                    ctx.formatValue === format ? "bg-[#141518]!" : undefined
                  }
                  onClick={() =>
                    ctx.setFormatValue && ctx.setFormatValue(format)
                  }
                >
                  <Text className="text-[12px] text-center font-bold text-[rgb(86,86,86)] capitalise">
                    {format}
                  </Text>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    );
  },
);

Controls.displayName = "@raikou/core/Controls";
