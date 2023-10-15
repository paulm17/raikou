import React from "react";
import cx from "clsx";

export interface DemoRootProps extends React.ComponentPropsWithoutRef<"div"> {}

export function DemoRoot({ className, ...others }: DemoRootProps) {
  return <div className={cx("demoRoot-root", className)} {...others} />;
}
