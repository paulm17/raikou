import { Box } from "@raikou/core";
import clsx from "clsx";
import type { ContextMenuItemOptions } from "./types";
import { contextMenuDividerStyle } from "./ContextMenuDivider.css";

export type ContextMenuDividerProps = Pick<
  ContextMenuItemOptions,
  "className" | "style"
>;

export function ContextMenuDivider({
  className,
  style,
}: ContextMenuDividerProps) {
  return (
    <Box className={clsx(contextMenuDividerStyle, className)} style={style} />
  );
}
