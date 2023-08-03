import React, { useEffect, useId } from "react";
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { ScrollArea } from "../../components/ScrollArea/src";
import { useSpotlightContext } from "./Spotlight.context";
import { spotlightActions } from "./spotlight.store";

export type SpotlightActionsListStylesNames =
  | "actionsList"
  | "actionsListInner";

export interface SpotlightActionsListProps
  extends BoxProps,
    StylesApiProps<SpotlightActionsListFactory>,
    ElementProps<"div"> {}

export type SpotlightActionsListFactory = Factory<{
  props: SpotlightActionsListProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsListStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightActionsListProps> = {};

export const SpotlightActionsList = factory<SpotlightActionsListFactory>(
  (props, ref) => {
    const {
      className,
      style,
      id,
      children,
      vars,
      classNames,
      styles,
      ...others
    } = useProps("SpotlightActionsList", defaultProps, props);
    const ctx = useSpotlightContext();
    const generatedId = `raikou-${useId().replaceAll(":", "")}`;
    const listId = id || generatedId;

    useEffect(() => {
      spotlightActions.setListId(listId, ctx.store);
      return () => spotlightActions.setListId("", ctx.store);
    }, []);

    return (
      <ScrollArea.Autosize
        {...ctx.getStyles("actionsList", {
          className,
          style,
          classNames,
          styles,
        })}
        ref={ref}
        type="scroll"
        scrollbarSize="var(--spotlight-actions-list-padding)"
        offsetScrollbars="y"
        id={listId}
        {...others}
      >
        {children}
      </ScrollArea.Autosize>
    );
  },
);

SpotlightActionsList.displayName = "@raikou/spotlight/SpotlightActionsList";
