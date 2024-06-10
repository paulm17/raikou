import React from "react";
import { Tooltip } from "../../../../Tooltip/src";
import { Chip } from "../../../../Chip/src";
import { GradientObj, SetGradient } from "../../GradientPicker.types";
import RepeatSVG from "../icons/repeat.svg";

interface repeatingProps {
  gradient: GradientObj;
  setGradient: SetGradient;
}

function Repeating({ gradient, setGradient }: repeatingProps) {
  const repeating = gradient?.repeating || false;

  const setRepeating = (isRepeating: boolean) => {
    const newGradient = { ...gradient };
    newGradient.repeating = isRepeating;
    setGradient(newGradient as GradientObj);
  };

  return (
    <Tooltip
      label="Toggle Repeating"
      offset={4}
      position="top"
      opened={repeating ? false : undefined}
    >
      <span>
        <Chip
          variant="filled"
          checked={repeating}
          onChange={setRepeating}
          classNames={{
            label: "border-none px-[10px]! leading-[28px]",
            iconWrapper: "hidden!",
          }}
        >
          <RepeatSVG />
        </Chip>
      </span>
    </Tooltip>
  );
}

export default Repeating;
