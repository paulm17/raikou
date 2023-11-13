import { forwardRef, useEffect, useState } from "react";
import { Checkbox } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DefaultProps, useComponentDefaultProps } from "@mantine/styles";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { FontAwesomeIcon } from "@ecomzilla/ui";
import { GradientObj } from "../../../GradientPicker.types";

interface RepeatProps extends DefaultProps {}

export const Repeat = forwardRef<HTMLDivElement, RepeatProps>((props, ref) => {
  const { className, classNames, styles, unstyled, ...others } =
    useComponentDefaultProps("Rotate", {}, props);

  const ctx = useGradientPickerContext();

  const onChange = (value: boolean) => {
    const newGradient = { ...ctx.gradient };
    newGradient.repeating = value;
    ctx.setGradient(newGradient as GradientObj);
  };

  return (
    <Checkbox
      label="Repeat"
      checked={ctx.gradient?.repeating}
      size="xs"
      color="gray"
      onChange={(event) => onChange(event.currentTarget.checked)}
      styles={{
        label: {
          fontSize: "11px",
        },
      }}
    />
  );
});
