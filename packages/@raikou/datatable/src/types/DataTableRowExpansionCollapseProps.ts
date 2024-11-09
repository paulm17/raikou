import type { CollapseProps } from "@raikou/core";

export type DataTableRowExpansionCollapseProps = Pick<
  CollapseProps,
  "animateOpacity" | "transitionDuration" | "transitionTimingFunction"
>;
