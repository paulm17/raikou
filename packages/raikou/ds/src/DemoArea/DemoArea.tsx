import React from "react";
import { Box } from "@raikou/server";
import { rem } from "@raikou/theme";

export interface DemoAreaProps {
  children?: React.ReactNode;
  withPadding?: boolean;
  centered?: boolean;
  maxWidth?: number | string;
  minHeight?: number | string;
  dimmed?: boolean;
  striped?: boolean;
}

export function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
  striped,
}: DemoAreaProps) {
  return (
    <Box
      className="demoArea-demo"
      mod={{ "with-padding": withPadding, centered, dimmed, striped }}
      __vars={{
        "--demo-flex": maxWidth ? "1" : undefined,
        "--demo-max-width": maxWidth ? rem(maxWidth) : undefined,
        "--demo-min-height": minHeight ? rem(minHeight) : undefined,
        "--demo-margin-y": maxWidth && centered ? "auto" : undefined,
      }}
    >
      <div className="demoArea-demoInner">{children}</div>
    </Box>
  );
}
