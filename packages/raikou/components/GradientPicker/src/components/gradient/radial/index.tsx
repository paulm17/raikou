import React from "react";
import { Box } from "@raikou/core";
import { Group } from "../../../../../Group/src";
import { SegmentedControl } from "../../../../../SegmentedControl/src";
import { Text } from "../../../../../Text/src";
import { Tooltip } from "../../../../../Tooltip/src";
import GradientRadialShapeDropDown from "./shapeDropDown";
import GradientRadialSizeDropDown from "./sizeDropDown";
import GradientNumberInput from "../numberInput";
import Repeating from "../repeating";
import MeasurementSwitcher from "../measurementSwitcher";
import { updateUnit, updateValue } from "../../utils/gradientUtils";
import { GradientObj } from "../../../GradientPicker.types";
import ToLeft from "../../icons/toLeft.svg";
import ToTop from "../../icons/toTop.svg";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import GearSVG from "../../icons/gear.svg";
import ArrowsH from "../../icons/arrowsH.svg";
import ArrowsV from "../../icons/arrowsV.svg";

function GradientControlRadial() {
  const ctx = useGradientPickerContext();

  const onChangeValue = (type: string, value: number) => {
    let newGradient = { ...ctx.gradient } as GradientObj;
    const gradient = updateValue(type, value, newGradient);

    ctx.setGradient(gradient as GradientObj);
  };

  return (
    <Group gap={0} justify="space-between">
      <Box>
        <SegmentedControl
          size="xs"
          value={"settings"}
          onChange={undefined}
          data={[
            {
              label: (
                <Group gap={8}>
                  <Text className="text-[18px] fill-current text-white!">
                    <GearSVG />
                  </Text>
                  <Text className="text-[14px]! text-white!">Radial</Text>
                </Group>
              ),
              value: "settings",
            },
          ]}
          classNames={{
            root: "bg-[rgb(233,233,245)]",
            label: "text-[rgb(0,0,0)]! py-0!",
          }}
        />
      </Box>
      <Box>
        <Group gap={0}>
          <Box className="pt-[4px]">
            <GradientRadialShapeDropDown
              gradient={ctx.gradient}
              setGradient={ctx.setGradient}
            />
            <GradientRadialSizeDropDown
              gradient={ctx.gradient}
              setGradient={ctx.setGradient}
            />
          </Box>
          <Group gap={0}>
            <Box ml="xs">
              <Group gap={0}>
                <Tooltip label="Left Positioning" offset={10}>
                  <Text className="relative top-[-4px] text-[a6a7ab]! w-[18px] h-[20px]">
                    <ToLeft />
                  </Text>
                </Tooltip>
                <GradientNumberInput
                  min={1}
                  max={100}
                  value={ctx.gradient.positions!.x.value}
                  onChange={(value) => onChangeValue("left", value)}
                  rightSection={
                    <MeasurementSwitcher
                      value={ctx.gradient.positions!.x.unit}
                      onChange={(value) =>
                        updateUnit("left", value, ctx.gradient)
                      }
                    />
                  }
                />
              </Group>
            </Box>
            <Group gap={0}>
              <Tooltip label="Top Positioning" offset={10}>
                <Text className="relative top-[-4px] text-[a6a7ab]! w-[18px] h-[20px]">
                  <ToTop />
                </Text>
              </Tooltip>
              <GradientNumberInput
                min={1}
                max={100}
                value={ctx.gradient.positions!.y.value}
                onChange={(value) => onChangeValue("top", value)}
                rightSection={
                  <MeasurementSwitcher
                    value={ctx.gradient.positions!.x.unit}
                    onChange={(value) => updateUnit("top", value, ctx.gradient)}
                  />
                }
              />
            </Group>
            {ctx.gradient?.shape === "size" && (
              <>
                <Group gap={0}>
                  <Tooltip label="Height Positioning" offset={10}>
                    <Text className="relative top-[-4px] text-[a6a7ab]! w-[18px] h-[20px]">
                      <ArrowsH />
                    </Text>
                  </Tooltip>
                  <GradientNumberInput
                    min={1}
                    max={100}
                    value={ctx.gradient.positions!.y.value}
                    onChange={(value) => onChangeValue("width", value)}
                    rightSection={
                      <MeasurementSwitcher
                        value={ctx.gradient.positions!.x.unit}
                        onChange={(value) =>
                          updateUnit("width", value, ctx.gradient)
                        }
                      />
                    }
                  />
                </Group>
                <Group gap={0}>
                  <Tooltip label="Width Positioning" offset={10}>
                    <Text className="relative top-[-4px] text-[a6a7ab]! w-[18px] h-[20px]">
                      <ArrowsV />
                    </Text>
                  </Tooltip>
                  <GradientNumberInput
                    min={1}
                    max={100}
                    value={ctx.gradient.positions!.y.value}
                    onChange={(value) => onChangeValue("height", value)}
                    rightSection={
                      <MeasurementSwitcher
                        value={ctx.gradient.positions!.x.unit}
                        onChange={(value) =>
                          updateUnit("height", value, ctx.gradient)
                        }
                      />
                    }
                  />
                </Group>
              </>
            )}
          </Group>
          <Repeating gradient={ctx.gradient} setGradient={ctx.setGradient} />
        </Group>
      </Box>
    </Group>
  );
}

export { GradientControlRadial };
