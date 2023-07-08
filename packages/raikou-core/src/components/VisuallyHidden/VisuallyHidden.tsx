import React from "react";
import { cn } from "../../core";

export interface VisuallyHiddenProps
  extends React.ComponentPropsWithoutRef<"span"> {}

export function VisuallyHidden({ className, ...others }: VisuallyHiddenProps) {
  return <span className={cn("visuallyHidden-root", className)} {...others} />;
}

// VisuallyHidden.classes = classes;
VisuallyHidden.displayName = "@raikou/core/VisuallyHidden";
