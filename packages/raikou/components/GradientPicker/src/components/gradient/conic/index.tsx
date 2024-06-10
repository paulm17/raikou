import React from "react";
import Repeating from "../repeating";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import GradientNumberInput from "../numberInput";
import MeasurementSwitcher from "../measurementSwitcher";
import { GradientObj } from "../../../GradientPicker.types";
import AngleSVG from "../../icons/angle.svg";
import ToLeft from "../../icons/toLeft.svg";
import ToTop from "../../icons/toTop.svg";
import { updateUnit, updateValue } from "../../utils/gradientUtils";
import { Group } from "../../../../../Group/src";
import { Box } from "@raikou/core";
import { SegmentedControl } from "../../../../../SegmentedControl/src";
import { Text } from "../../../../../Text/src";
import { Tooltip } from "../../../../../Tooltip/src";
import GearSVG from "../../icons/gear.svg";

function GradientControlConic() {
  const ctx = useGradientPickerContext();
  const angle = Number(ctx.gradient?.angle);
  const positions = ctx.gradient?.positions;

  const setLinearAngle = (angle: number) => {
    const newGradient = { ...ctx.gradient };
    newGradient.angle = angle;
    ctx.setGradient(newGradient as GradientObj);
  };

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
                  <Text className="text-[14px]! text-white!">Conic</Text>
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
          <Tooltip label="Angle" offset={10}>
            <Text className="flex justify-center h-[24px] w-[20px] text-center text-[a6a7ab]!">
              <AngleSVG />
            </Text>
          </Tooltip>
          <Box ml={0}>
            <GradientNumberInput
              min={0}
              max={359}
              value={angle}
              onChange={(value) => setLinearAngle(value)}
            />
          </Box>
          <Box ml="xs">
            <Group gap={0}>
              <Tooltip label="Left Positioning" offset={10}>
                <Text className="relative top-[-4px] w-[18px] h-[20px]">
                  <ToLeft />
                </Text>
              </Tooltip>
              <GradientNumberInput
                min={1}
                max={100}
                value={positions!.x.value}
                onChange={(value) => onChangeValue("left", value)}
                rightSection={
                  <MeasurementSwitcher
                    value={positions!.x.unit}
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
              <Text className="relative top-[-4px] w-[18px] h-[20px]">
                <ToTop />
              </Text>
            </Tooltip>
            <GradientNumberInput
              min={1}
              max={100}
              value={positions!.y.value}
              onChange={(value) => onChangeValue("top", value)}
              rightSection={
                <MeasurementSwitcher
                  value={positions!.x.unit}
                  onChange={(value) => updateUnit("top", value, ctx.gradient)}
                />
              }
            />
          </Group>
          <Repeating gradient={ctx.gradient} setGradient={ctx.setGradient} />
        </Group>
      </Box>
    </Group>
  );
}

export { GradientControlConic };
