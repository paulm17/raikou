import type { CollapseProps } from "../../../components/Collapse/src";

export type DataTableRowExpansionCollapseProps = Pick<
  CollapseProps,
  "animateOpacity" | "transitionDuration" | "transitionTimingFunction"
>;
