import React from "react";
import { Box } from "@raikou/core";
import clsx from "clsx";
import type { ContextMenuItemOptions } from "./types";
import classes from "./ContextMenuDivider.module.css";

export type ContextMenuDividerProps = Pick<
  ContextMenuItemOptions,
  "className" | "style"
>;

export function ContextMenuDivider({
  className,
  style,
}: ContextMenuDividerProps) {
  return <Box className={clsx(classes["root"], className)} style={style} />;
}
