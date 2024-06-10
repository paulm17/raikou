import React, { useEffect, useState } from "react";
import { Box } from "@raikou/core";
import { Group } from "../../../../Group/src";
import { SegmentedControl } from "../../../../SegmentedControl/src";
import { Text } from "../../../../Text/src";
import { Tooltip } from "../../../../Tooltip/src";
import { UnstyledButton } from "../../../../UnstyledButton/src";
import { useGradientPickerContext } from "../../GradientPicker.context";
import { writeHintData } from "../utils/editor";
import {
  GradientObj,
  GradientColor,
  GradientHint,
  GradientType,
} from "../../GradientPicker.types";
import LinearSVG from "../icons/linear.svg";
import RadialSVG from "../icons/radial.svg";
import ConicSVG from "../icons/conic.svg";
import TrashSVG from "../icons/trash.svg";

function GradientStop() {
  const ctx = useGradientPickerContext();
  const [stopNum, setStopNum] = useState(-1);

  const getIndex = (id: string) => {
    return ctx.gradient?.colors.findIndex((item) => item.id === id) as number;
  };

  const onDeleteStop = () => {
    let gradient = { ...ctx.gradient };

    let colors = [...(gradient?.colors as GradientColor[])];
    let index = getIndex(ctx.activeStopIndex);
    colors.splice(index, 1);

    let hints = [...(gradient?.hints as GradientHint[])];
    hints.pop();

    writeHintData(colors, hints, true);

    gradient.colors = colors;
    gradient.hints = hints;

    ctx.setGradient(gradient as GradientObj);

    // set new active index
    ctx.setActiveStopIndex(ctx.gradient?.colors[0]?.id);

    getStopNum();
  };

  const getStopNum = () => {
    const index = getIndex(ctx.activeStopIndex);
    setStopNum(index + 1);
  };

  useEffect(() => {
    getStopNum();
  }, []);

  useEffect(() => {
    const index = getIndex(ctx.activeStopIndex);
    setStopNum(index + 1);
  }, [ctx.activeStopIndex]);

  return (
    <Group gap={0} className="px-[2px] rounded-[4px]">
      <Box className="w-[80px]">
        <Group gap={4}>
          <Text className="text-[12px]! ml-[4px] mr-[4px]">Stop</Text>
          <Text className="text-[12px]!">{stopNum}</Text>
        </Group>
      </Box>
      <UnstyledButton
        className={`
          px-[6px] py-[3px] 
          ${ctx.gradient!.colors.length <= 2 ? "opacity-60" : "opacity-100"}
          ${ctx.gradient!.colors.length > 2 ? "red" : ""}        
        `}
        disabled={ctx.gradient!.colors.length <= 2 ? true : false}
        onClick={() => onDeleteStop()}
      >
        <Tooltip
          label="Delete Color"
          opened={ctx.gradient!.colors.length <= 2 ? false : undefined}
        >
          <Text className="w-[20px] text-center text-white dark:text-[#a6a7ab]! fill-current">
            <TrashSVG />
          </Text>
        </Tooltip>
      </UnstyledButton>
    </Group>
  );
}

function GradientControls() {
  const ctx = useGradientPickerContext();

  const onChange = (gradientType: GradientType) => {
    const newGradient = { ...ctx.gradient };
    newGradient.type = gradientType;

    ctx.setGradient(newGradient);
  };

  return (
    <Group justify="space-between" gap={0} className="rounded-[4px]">
      <Group gap={0} className="pl-[2px] pr-[4px]">
        <SegmentedControl
          size="xs"
          value={ctx.gradient?.type}
          onChange={(value: string) => onChange(value as GradientType)}
          data={[
            {
              label: (
                <Tooltip
                  label="Linear Gradient"
                  withinPortal
                  offset={10}
                  opened={ctx.gradient?.type === "linear" ? false : undefined}
                >
                  <Box className="pt-[3px] mb-[-2px]">
                    <LinearSVG />
                  </Box>
                </Tooltip>
              ),
              value: "linear",
            },
            {
              label: (
                <Tooltip
                  label="Radial Gradient"
                  withinPortal
                  offset={10}
                  opened={ctx.gradient?.type === "radial" ? false : undefined}
                >
                  <Box className="pt-[3px] mb-[-2px]">
                    <RadialSVG />
                  </Box>
                </Tooltip>
              ),
              value: "radial",
            },
            {
              label: (
                <Tooltip
                  label="Conic Gradient"
                  withinPortal
                  offset={10}
                  opened={ctx.gradient?.type === "conic" ? false : undefined}
                >
                  <Box className="w-[16px] h-[22px]">
                    <Box className="pt-[3px] mb-[-2px]">
                      <ConicSVG />
                    </Box>
                  </Box>
                </Tooltip>
              ),
              value: "conic",
            },
          ]}
          classNames={{
            root: "bg-[rgb(233,233,245)]",
            label: "text-[rgb(0,0,0)]",
          }}
          //   labelActive: {
          //     color: "rgb(86, 140, 245) !important",
          //     fontWeight: "bold",
          //   },
        />
      </Group>
      <GradientStop />
    </Group>
  );
}

export { GradientControls };
