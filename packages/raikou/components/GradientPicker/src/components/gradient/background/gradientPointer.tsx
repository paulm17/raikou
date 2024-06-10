import React, { ReactNode, useMemo, useRef } from "react";
import { Box } from "@raikou/core";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { simplifyEvent } from "../../utils/simplifyEvent.js";
import { GradientObj } from "../../../GradientPicker.types";
import { cssGradient } from "../../utils";

interface gradientPointerProps {
  children: ReactNode;
}

function GradientPointer({ children }: gradientPointerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gradientAngleRef = useRef<HTMLDivElement | null>(null);
  const ctx = useGradientPickerContext();

  const unbindEventListeners = () => {
    const container = containerRef.current;

    container?.removeEventListener("mousemove", handleChange);
    container?.removeEventListener("mouseup", handleChange);
    container?.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (): void => {
    ctx.setLinearActive(false);
    unbindEventListeners();
  };

  const handleChange = (e: MouseEvent): void => {
    const target = e.target as HTMLDivElement;

    if (!target.classList.contains("vc-gradient-mode")) {
      const { x, y } = simplifyEvent(e);
      const box = gradientAngleRef.current;

      if (box) {
        const boxRect = box.getBoundingClientRect();

        // Calculate angle relative to the center
        const boxcx = boxRect.left + boxRect.width / 2;
        const boxcy = boxRect.top + boxRect.height / 2;
        const radians = Math.atan2(x - boxcx, y - boxcy) - Math.PI;
        const degrees = Math.abs((radians * 180) / Math.PI);

        // ctrl and shift can be used to divide / quarter the snapping points
        const div = [1, 2, 4][Number(e.shiftKey || e.ctrlKey)]!;
        const linearAngle = degrees - (degrees % (45 / div));

        const gradient = { ...ctx.gradient };
        gradient.angle = linearAngle;
        ctx.setGradient(gradient as GradientObj);
      }
    }
  };

  const handleMouseDown = () => {
    if (ctx.gradient?.type === "linear") {
      const container = containerRef.current;
      if (container) {
        container.addEventListener("mousemove", handleChange);
        container.addEventListener("mouseup", handleChange);
        container.addEventListener("mouseup", handleMouseUp);

        ctx.setLinearActive(true);
      }
    }
  };

  const linearAngleArrow = () => {
    let angle = Number(ctx.gradient?.angle) - 90;

    return { transform: `rotate(${angle}deg)` };
  };

  const radialDirections = useMemo(
    () => [
      { pos: "tl", x: 0, y: 0, css: "circle at left top" },
      { pos: "tm", x: 50, y: 0, css: "circle at center top" },
      { pos: "tr", x: 100, y: 0, css: "circle at right top" },
      { pos: "r", x: 0, y: 50, css: "circle at right" },
      { pos: "m", x: 50, y: 50, css: "circle at center" },
      { pos: "l", x: 100, y: 50, css: "circle at left" },
      { pos: "br", x: 0, y: 100, css: "circle at right bottom" },
      { pos: "bm", x: 50, y: 100, css: "circle at center bottom" },
      { pos: "bl", x: 100, y: 100, css: "circle at left bottom" },
    ],
    [],
  );

  const radialPositionActive = () => {
    const positions = ctx.gradient?.positions;
    const x = positions?.x.value;
    const y = positions?.y.value;

    let index = radialDirections.findIndex(
      (item) => item.x === x && item.y === y,
    );

    if (index === -1) {
      return null;
    }

    return radialDirections[index]!.pos;
  };

  const radialPositions = radialDirections.map((item) => {
    return item.pos;
  });

  const onChangePosition = (pos: string) => {
    const item = radialDirections.find((v) => v.pos === pos);
    const gradient = { ...ctx.gradient } as GradientObj;

    if (gradient) {
      gradient.positions.x.value = Number(item?.x);
      gradient.positions.y.value = Number(item?.y);
    }

    ctx.setGradient(gradient);
  };

  return (
    <Box
      ref={containerRef}
      className="relative w-full h-[170px] cursor-pointer rounded-[4px] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:rounded-[4px] [background-size:8px]"
      style={{ background: cssGradient([ctx.gradient], "single_gradient") }}
      onMouseDown={handleMouseDown}
      onKeyDown={handleMouseDown}
      role="button"
      tabIndex={0}
    >
      <>
        {children}
        {ctx.gradient?.type === "linear" && (
          <Box
            ref={gradientAngleRef}
            className={`m-auto absolute top-0 right-0 bottom-0 left-0 w-[0.35em] h-[0.35em] rounded-full bg-white
              ${ctx.isLinearActive ? "opacity-100" : "opacity-25"}
              transition-all delay-300 hover:opacity-100
            `}
          >
            <Box
              className="mx-auto my-0 absolute top-[2px] right-0 bottom-0 left-[50%] w-[2em] h-[2px] bg-white rounded-[1em] origin-left"
              style={linearAngleArrow()}
            />
          </Box>
        )}
        {ctx.gradient?.type === "radial" && (
          <Box className="m-auto h-[5em] w-[5em] grid grid-cols-3 grid-rows-3 opacity-100 cursor-pointer absolute top-0 right-0 bottom-0 left-0 transition-all delay-300">
            {radialPositions.map((pos, index) => {
              return (
                <Box
                  key={index}
                  className={`
                    m-auto w-[15px] h-[15px] relative transition-all delay-300
                    border-2 border-solid ${
                      pos === radialPositionActive()
                        ? "border-white"
                        : "border-transparent"
                    }
                    ${pos === radialPositionActive() ? "rounded-full" : ""}
                    before:absolute before:content-[''] before:top-0 before:right-0 before:bottom-0 before:left-0 
                    before:w-[5px] before:h-[5px] before:rounded-[100%] before:bg-white
                    before:transition-all before:delay-300 before:m-auto
                    ${
                      pos === radialPositionActive()
                        ? "before:opacity-100"
                        : "before:opacity-25"
                    }
                  `}
                  onClick={() => onChangePosition(pos)}
                  onKeyDown={() => onChangePosition(pos)}
                  role="button"
                  tabIndex={0}
                />
              );
            })}
          </Box>
        )}
      </>
    </Box>
  );
}

export { GradientPointer };
