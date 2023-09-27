import React from "react";
import {
  type RaikouSize,
  type RaikouShadow,
  px,
  useRaikouTheme,
  useDirection,
} from "@raikou/core";
import { Paper } from "../../components/Paper/src";
import { useClickOutside, useMergedRef, useWindowEvent } from "@raikou/hooks";
import type { ReactNode } from "react";
import { useElementOuterSize } from "./hooks";

type DataTableRowMenuProps = {
  borderRadius: RaikouSize | undefined;
  shadow: RaikouShadow | undefined;
  zIndex: number | undefined;
  y: number;
  x: number;
  children: ReactNode;
  onDestroy: () => void;
};

export default function DataTableRowMenu({
  borderRadius = "xs",
  shadow = "sm",
  zIndex = 3,
  y: desiredY,
  x: desiredX,
  onDestroy,
  children,
}: DataTableRowMenuProps) {
  useWindowEvent("resize", onDestroy);
  useWindowEvent("scroll", onDestroy);
  const clickOutsideRef = useClickOutside<HTMLDivElement>(onDestroy);
  const { ref: sizeRef, width, height } = useElementOuterSize<HTMLDivElement>();
  const ref = useMergedRef(clickOutsideRef, sizeRef);

  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  const theme = useRaikouTheme();
  const { dir } = useDirection();

  const mdSpacing = px(theme.spacing.md) as number;

  return (
    <Paper
      ref={ref}
      shadow={shadow}
      radius={borderRadius}
      className="dataTableRowMenu-root"
      style={{
        zIndex,
        top:
          desiredY + height + mdSpacing > windowHeight
            ? windowHeight - height - mdSpacing
            : desiredY,
        left:
          dir === "ltr"
            ? desiredX + width + mdSpacing > windowWidth
              ? windowWidth - width - mdSpacing
              : desiredX
            : windowWidth -
              mdSpacing -
              (desiredX - width - mdSpacing < 0 ? width + mdSpacing : desiredX),
      }}
    >
      {children}
    </Paper>
  );
}
