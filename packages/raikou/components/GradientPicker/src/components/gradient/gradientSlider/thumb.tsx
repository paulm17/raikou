import React, { MutableRefObject, forwardRef, useEffect, useRef } from "react";
import { Box } from "@raikou/core";
import {
  resolveColorStopPosition,
  simplifyEvent,
  sortByPosition,
} from "../../utils";
import { useGradientPickerContext } from "../../../GradientPicker.context";
import { GradientColor, GradientObj } from "../../../GradientPicker.types";
import { parseColor } from "../../../../../ColorPicker/src";

export interface ThumbProps extends React.ComponentPropsWithoutRef<"div"> {
  position: { x: number; y: number };
  stopIndex: number;
  stopsRef: MutableRefObject<HTMLDivElement | null>;
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  ({ position, stopIndex, stopsRef, ...others }, ref) => {
    const pointerRef = useRef<HTMLDivElement | null>(null);
    const moveIndex = useRef(-1);
    const ctx = useGradientPickerContext();

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (moveIndex.current !== stopIndex) return;

      const { x } = simplifyEvent(e);
      let gradient = { ...ctx.gradient } as GradientObj;

      if (gradient?.colors) {
        const position = resolveColorStopPosition(stopsRef.current, x) * 100;

        gradient.colors[stopIndex].position = position;
        sortByPosition(gradient?.colors, true);

        ctx.setGradient(gradient);
      }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLDivElement;
      const parent = target.parentElement as HTMLDivElement;
      // @ts-ignore
      const index = [...parent.querySelectorAll(".colorpicker-thumb")].indexOf(
        target,
      );

      if (index !== -1) {
        moveIndex.current = index;

        const { color } = ctx.gradient?.colors[index] as GradientColor;

        ctx.setMovingStopIndex(index);
        ctx.setActiveStopIndex(index);
        ctx.setColor(parseColor(color));
      }
    };

    const handleMouseUp = () => {
      ctx.setMovingStopIndex(-1);
      moveIndex.current = -1;
    };

    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        removeEventListeners();
      };
    }, []);

    useEffect(() => {
      moveIndex.current = ctx.movingStopIndex;
    }, [ctx.movingStopIndex]);

    return (
      <Box
        ref={pointerRef}
        __vars={{
          "--thumb-x-offset": `${position.x}%`,
        }}
        onMouseDown={handleMouseDown}
        onKeyDown={() => {}}
        {...others}
      />
    );
  },
);

Thumb.displayName = "@raikou/core/GradientPickerThumb";
