import React from "react";
import { Text } from "@raikou/server";
import { DemoArea, DemoAreaProps } from "../DemoArea";

export interface DemoColumnsProps extends DemoAreaProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  controls: React.ReactNode;
}

export function DemoColumns({
  children,
  withPadding,
  centered,
  maxWidth,
  minHeight,
  title,
  description,
  controls,
  dimmed,
  striped,
}: DemoColumnsProps) {
  return (
    <div className="demoColumns-columns">
      <DemoArea
        withPadding={withPadding}
        maxWidth={maxWidth}
        minHeight={minHeight}
        centered={centered}
        dimmed={dimmed}
        striped={striped}
      >
        {children}
      </DemoArea>

      <div className="demoColumns-controls">
        {title && (
          <div className="demoColumns-header">
            <Text fw={500} fz="sm" mb={5}>
              {title}
            </Text>
            {description && (
              <Text c="dimmed" fz={11} lh={1.45}>
                {description}
              </Text>
            )}
          </div>
        )}

        {controls}
      </div>
    </div>
  );
}
