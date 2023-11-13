import { forwardRef, useEffect, useState } from "react";
import { DefaultProps, useComponentDefaultProps } from "@mantine/styles";
import { useDidUpdate } from "@mantine/hooks";
import { Dial as DialControl } from "@ecomzilla/ui";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { GradientObj } from "../../../GradientPicker.types";

interface DialProps extends DefaultProps {
  scale?: number;
}

const defaultProps: Partial<DialProps> = {
  scale: 1.0,
};

export const Dial = forwardRef<HTMLDivElement, DialProps>((props, ref) => {
  const { scale, className, classNames, styles, unstyled, ...others } =
    useComponentDefaultProps("Dial", defaultProps, props);

  const ctx = useGradientPickerContext();

  const [update, setUpdate] = useState(false);
  const [angle, setAngle] = useState(ctx.gradient!.angle);

  const onChange = (value: number) => {
    setAngle(value);
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
    <DialControl
      scale={scale}
      value={angle}
      onChange={(value) => onChange(value)}
      {...others}
    />
  );
});
