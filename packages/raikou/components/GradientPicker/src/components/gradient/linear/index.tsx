import React from "react";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import GradientLinearDropDown from "./dropDown";
import GradientNumberInput from "../numberInput";
import Repeating from "../repeating";
import { GradientObj } from "../../../GradientPicker.types";
import { Group } from "../../../../../Group/src";
import { Box } from "@raikou/core";
import { SegmentedControl } from "../../../../../SegmentedControl/src";
import { Text } from "../../../../../Text/src";
import GearSVG from "../../icons/gear.svg";

function GradientControlLinear() {
  const ctx = useGradientPickerContext();

  const setLinearAngle = (angle: number) => {
    const newGradient = { ...ctx.gradient };
    newGradient.angle = angle;
    ctx.setGradient(newGradient as GradientObj);
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
                  <Text className="text-[14px]! text-white!">Linear</Text>
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
          <GradientLinearDropDown
            linearAngle={ctx.gradient.angle}
            setLinearAngle={setLinearAngle}
          />
          <Box ml={2} mr={4}>
            <GradientNumberInput
              min={0}
              max={359}
              value={ctx.gradient.angle}
              onChange={(value) => setLinearAngle(value)}
            />
          </Box>
          <Repeating gradient={ctx.gradient} setGradient={ctx.setGradient} />
        </Group>
      </Box>
    </Group>
  );
}

export { GradientControlLinear };
