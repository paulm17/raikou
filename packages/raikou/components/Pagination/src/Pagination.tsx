import React from "react";
import { factory, useProps, Factory, RaikouSize } from "@raikou/core";
import { Group } from "../../Group/src";
import {
  PaginationRoot,
  PaginationRootCssVariables,
  PaginationRootProps,
  PaginationRootStylesNames,
} from "./PaginationRoot/PaginationRoot";
import { PaginationControl } from "./PaginationControl/PaginationControl";
import { PaginationDots } from "./PaginationDots/PaginationDots";
import {
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "./PaginationEdges/PaginationEdges";
import { PaginationItems } from "./PaginationItems/PaginationItems";
import { PaginationIcon } from "./Pagination.icons";

export type PaginationStylesNames = PaginationRootStylesNames;
export type PaginationCssVariables = PaginationRootCssVariables;

export interface PaginationProps extends PaginationRootProps {
  /** Determines whether first/last controls should be rendered, false by default */
  withEdges?: boolean;

  /** Determines whether next/previous controls should be rendered, true by default */
  withControls?: boolean;

  /** Adds props to next/previous/first/last controls */
  getControlProps?(
    control: "first" | "previous" | "last" | "next"
  ): Record<string, any>;

  /** Next control icon component */
  nextIcon?: PaginationIcon;

  /** Previous control icon component */
  previousIcon?: PaginationIcon;

  /** Last control icon component */
  lastIcon?: PaginationIcon;

  /** First control icon component */
  firstIcon?: PaginationIcon;

  /** Dots icon component */
  dotsIcon?: PaginationIcon;

  /** Key of `theme.spacing`, gap between controls, `8` by default */
  gap?: RaikouSize | (string & {}) | number;
}

export type PaginationFactory = Factory<{
  props: PaginationProps;
  ref: HTMLDivElement;
  stylesNames: PaginationStylesNames;
  vars: PaginationCssVariables;
  staticComponents: {
    Root: typeof PaginationRoot;
    Control: typeof PaginationControl;
    Dots: typeof PaginationDots;
    First: typeof PaginationFirst;
    Last: typeof PaginationLast;
    Next: typeof PaginationNext;
    Previous: typeof PaginationPrevious;
    Items: typeof PaginationItems;
  };
}>;

const defaultProps: Partial<PaginationProps> = {
  withControls: true,
  siblings: 1,
  boundaries: 1,
  gap: 8,
};

export const Pagination = factory<PaginationFactory>((_props, ref) => {
  const props = useProps("Pagination", defaultProps, _props);
  const {
    withEdges,
    withControls,
    getControlProps,
    nextIcon,
    previousIcon,
    lastIcon,
    firstIcon,
    dotsIcon,
    total,
    gap,
    ...others
  } = props;

  if (total <= 0) {
    return null;
  }

  return (
    <PaginationRoot ref={ref} total={total} {...others}>
      <Group gap={gap}>
        {withEdges && (
          <PaginationFirst icon={firstIcon} {...getControlProps?.("first")} />
        )}
        {withControls && (
          <PaginationPrevious
            icon={previousIcon}
            {...getControlProps?.("previous")}
          />
        )}
        <PaginationItems dotsIcon={dotsIcon} />
        {withControls && (
          <PaginationNext icon={nextIcon} {...getControlProps?.("next")} />
        )}
        {withEdges && (
          <PaginationLast icon={lastIcon} {...getControlProps?.("last")} />
        )}
      </Group>
    </PaginationRoot>
  );
});

Pagination.displayName = "@raikou/core/Pagination";
Pagination.Root = PaginationRoot;
Pagination.Control = PaginationControl;
Pagination.Dots = PaginationDots;
Pagination.First = PaginationFirst;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
Pagination.Items = PaginationItems;
