import { forwardRef, useEffect, useRef, useState } from "react";
import { Box } from "@mantine/core";
import {
  DefaultProps,
  Selectors,
  useComponentDefaultProps,
} from "@mantine/styles";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import {
  buildGradientStrip,
  genRandomId,
  resolveColorStopPosition,
  simplifyEvent,
  sortByPosition,
  writeGradientColor,
} from "../utils";
import { createStyles } from "@mantine/styles";
import {
  GradientColor,
  GradientHint,
  GradientObj,
  GradientStop,
} from "../../../GradientPicker.types";
import { writeHintData } from "../utils/editor";

interface gradientStopPointProps {
  stop: GradientStop;
}

export const StopPoint = forwardRef<HTMLDivElement, gradientStopPointProps>(
  ({ stop }, ref) => {
    const ctx = useGradientPickerContext();
    const pointRef = useRef<HTMLDivElement | null>(null);
    let moveState = false;
    let elemId = ctx.activeStopIndex;

    const getIndex = (id: string) => {
      return ctx.gradient?.colors.findIndex((item) => item.id === id) as number;
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (moveState === false) {
        return null;
      }

      let update = true;

      const { x } = simplifyEvent(e);
      let gradient = { ...ctx.gradient } as GradientObj;

      if (update && gradient?.colors) {
        const position =
          resolveColorStopPosition((ref as any).current, x) * 100;
        const index = getIndex(elemId);

        gradient.colors[index]!.position = position;
        sortByPosition(gradient?.colors, true);

        ctx.setGradient(gradient);
      }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLDivElement;
      const parent = target.parentElement as HTMLDivElement;
      const index = [...parent.querySelectorAll(".gradientStop")].indexOf(
        target,
      );

      const { id } = ctx.gradient?.colors[index] as GradientColor;

      moveState = true;
      elemId = id;
      ctx.setActiveStopIndex(id);

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = (e: MouseEvent) => {
      moveState = false;
      removeEventListeners();
    };

    return (
      <Box
        ref={pointRef}
        className="gradientStop"
        sx={{
          background: "currentColor",
          color: stop.color,
          position: "absolute",
          left: `calc(${stop.loc}% - 6px)`,
          top: 1,
          height: "12px",
          width: "12px",
          borderRadius: "100%",
          border: "2px solid white",
          boxShadow: "0 0.05em 0.2em rgba(0, 0, 0, 0.15)",
          transition: "opacity 0.15s",
          cursor: "default",
        }}
        onMouseDown={handleMouseDown}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      />
    );
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = createStyles((theme, _params: any) => ({
  root: { position: "relative", marginTop: "16px", marginBottom: "16px" },
  wrapper: {
    marginLeft: "6px",
    marginRight: "6px",
  },
  inner: {
    position: "absolute",
    height: "14px",
    left: "-7px",
    right: "-7px",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      width: "100%",
      height: "100%",
      background: `url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path fill="white" d="M1,0H2V1H1V0ZM0,1H1V2H0V1Z"/><path fill="gray" d="M0,0H1V1H0V0ZM1,1H2V2H1V1Z"/></svg>')`,
      backgroundSize: "0.5em",
      borderRadius: "1000px",
      zIndex: -1,
    },
  },
}));

export type SliderNames = Selectors<typeof useStyles>;

interface SliderProps
  extends DefaultProps<SliderNames>,
    React.ComponentPropsWithoutRef<"div"> {}

const defaultProps: Partial<SliderProps> = {};

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const { className, classNames, styles, unstyled, ...others } =
    useComponentDefaultProps("Slider", defaultProps, props);

  const { classes, cx } = useStyles(null, {
    classNames,
    styles,
    name: "Slider",
    unstyled,
  });

  const stopsRef = useRef<HTMLDivElement | null>(null);
  const ctx = useGradientPickerContext();

  const stops = ctx.gradient?.colors.map((item) => {
    return { id: item.id, color: item.color, loc: item.position };
  });

  const onStopAdd = (e: React.MouseEvent) => {
    const value = ctx.gradient!.colors[0]!.color;
    const { x } = simplifyEvent(e);
    const position = resolveColorStopPosition(stopsRef.current, x) * 100;
    const id = genRandomId();
    const newColor = writeGradientColor(id, value, position);

    let gradient = { ...ctx.gradient } as GradientObj;

    gradient?.colors.push(newColor as GradientColor);
    sortByPosition(gradient?.colors, true);

    gradient?.hints.push({ percentage: 50 } as GradientHint);
    writeHintData(gradient?.colors, gradient?.hints, true);

    ctx.setGradient(gradient);
    ctx.setActiveStopIndex(id);
  };

  return (
    <Box className={cx(classes.root, className)}>
      <Box
        ref={stopsRef}
        className={cx(classes.wrapper, className)}
        {...others}
      >
        <Box
          className={cx(classes.inner, className)}
          onMouseDown={onStopAdd}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
          sx={{
            background: buildGradientStrip(
              ctx.gradient?.colors,
              ctx.gradient?.hints,
              0,
              0,
            ),
          }}
        />
        <>
          {stops?.map((stop, index) => (
            <StopPoint key={index} stop={stop} ref={stopsRef} />
          ))}
        </>
      </Box>
    </Box>
  );
});
