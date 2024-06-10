import React, { ReactNode, useEffect, useState } from "react";
import { useDisclosure, useToggle } from "@raikou/hooks";
import { Popover } from "../../../../Popover/src";
import { NumberInput } from "../../../../NumberInput/src";
import { Box } from "@raikou/core";
import { Text } from "../../../../Text/src";
import { Slider } from "../../../../Slider/src";
import { useTimeout } from "../utils/useTimeout";

interface gradientNumberInput {
  min: number;
  max: number;
  value: number;
  rightSection?: ReactNode;
  onChange: (value: number) => void;
}

function GradientNumberInput({
  min,
  max,
  value,
  onChange,
}: gradientNumberInput) {
  const [isOverId, setOverId] = useState("");
  const [opened, { close: toggleClose, open: toggleOpen }] =
    useDisclosure(false);
  const [abortTimeout, setAbortTimeout] = useToggle([false, true]);

  const onMouseEnter = () => {
    toggleOpen();
    setOverId("over1");
  };

  const onMouseLeave = () => {
    setAbortTimeout(false);
  };

  const onMouseOver = () => {
    setOverId("over2");
  };

  useTimeout(
    () => {
      toggleClose();
      setOverId("");
    },
    abortTimeout ? null : 500,
  );

  useEffect(() => {
    if (isOverId !== "") {
      setAbortTimeout(true);
    }
  }, [isOverId]);

  return (
    <Popover
      width={100}
      position="bottom-start"
      shadow="md"
      opened={opened}
      offset={0}
    >
      <Popover.Target>
        <Box className="relative ml-[-6px]">
          <NumberInput
            className="scale-[70%] w-[70px]"
            min={min}
            max={max}
            value={value}
            readOnly
            onChange={onChange}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            rightSection={
              <Text className="text-[13px] absolute top-[0px]">°</Text>
            }
          />
        </Box>
      </Popover.Target>
      <Popover.Dropdown p={8} onMouseLeave={onMouseLeave}>
        <Slider
          size="xs"
          min={min}
          max={max}
          label={null}
          value={value}
          onMouseEnter={onMouseOver}
          onChange={onChange}
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export default GradientNumberInput;
