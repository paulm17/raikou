import { forwardRef, useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { DefaultProps, useComponentDefaultProps } from "@mantine/styles";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { FontAwesomeIcon } from "@ecomzilla/ui";
import { GradientObj } from "../../../GradientPicker.types";

type Rotation = "clockwise" | "antiClockwise";

interface RotateProps extends DefaultProps {
  rotate: Rotation;
}

const defaultProps: Partial<RotateProps> = {
  rotate: "antiClockwise",
};

export const Rotate = forwardRef<HTMLDivElement, RotateProps>((props, ref) => {
  const { rotate, className, classNames, styles, unstyled, ...others } =
    useComponentDefaultProps("Rotate", defaultProps, props);

  const ctx = useGradientPickerContext();

  const [update, setUpdate] = useState(false);
  const [angle, setAngle] = useState(0);

  const onChange = (rotate: Rotation) => {
    setAngle(
      (prev) =>
        (360 + (rotate === "antiClockwise" ? prev - 45 : prev + 45)) % 360,
    );
  };

  useEffect(() => {
    setAngle(ctx.gradient!.angle);
  }, []);

  useEffect(() => {
    setUpdate(false);
    setAngle(ctx.gradient!.angle);

    window.setTimeout(() => {
      setUpdate(true);
    }, 250);
  }, [ctx.gradient?.angle]);

  useDidUpdate(() => {
    if (update) {
      const newGradient = { ...ctx.gradient };
      newGradient.angle = angle;
      ctx.setGradient(newGradient as GradientObj);
    }
  }, [angle]);

  return (
    <ActionIcon size={11} onClick={() => onChange(rotate)} {...others}>
      {rotate === "antiClockwise" && <FontAwesomeIcon icon="undo" type="fas" />}
      {rotate === "clockwise" && <FontAwesomeIcon icon="redo" type="fas" />}
    </ActionIcon>
  );
});
