import React from "react";
import clsx from "clsx";

export interface VisuallyHiddenProps
  extends React.ComponentPropsWithoutRef<"span"> {}

export function VisuallyHidden({ className, ...others }: VisuallyHiddenProps) {
  return (
    <span className={clsx("visuallyHidden-root", className)} {...others} />
  );
}

// VisuallyHidden.classes = classes;
VisuallyHidden.displayName = "@raikou/core/VisuallyHidden";
