import React from "react";
import classes from "./ContextMenuOverlay.module.css";

export type ContextMenuOverlayProps = React.PropsWithChildren<{
  zIndex: number | undefined;
  onHide: () => void;
}>;

export function ContextMenuOverlay({
  zIndex,
  children,
  onHide,
}: ContextMenuOverlayProps) {
  const handleHide = (e: React.MouseEvent) => {
    e.preventDefault();
    onHide();
  };
  return (
    <div
      className={classes["root"]}
      style={{ zIndex }}
      onClick={handleHide}
      onContextMenu={handleHide}
    >
      {children}
    </div>
  );
}
