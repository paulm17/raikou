import React from "react";
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from "@raikou/core";
import { useStore } from "../store";

export type ListItemStylesNames =
  | "item"
  | "itemWrapper"
  | "itemIcon"
  | "itemLabel";

// @ts-ignore
export interface ListItemProps
  extends BoxProps,
    CompoundStylesApiProps<ListItemFactory>,
    ElementProps<"li"> {
  /** Icon to replace item bullet */
  icon?: React.ReactNode;

  /** Item content */
  children?: React.ReactNode;
}

export type ListItemFactory = Factory<{
  props: ListItemProps;
  ref: HTMLLIElement;
  stylesNames: ListItemStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ListItemProps> = {};

export const ListItem = factory<ListItemFactory>((_props, ref) => {
  const props = useProps("ListItem", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    icon,
    children,
    mod,
    ...others
  } = props;

  const ctx = useStore.getState();
  const _icon = icon || ctx.icon;
  const stylesApiProps = { classNames, styles };

  return (
    <Box
      {...useStore
        .getState()
        .getStyles("item", { ...stylesApiProps, className, style })}
      component="li"
      mod={[{ "with-icon": !!_icon, centered: ctx.center }, mod]}
      ref={ref}
      {...others}
    >
      <div {...ctx.getStyles("itemWrapper", stylesApiProps)}>
        {_icon && (
          <span {...ctx.getStyles("itemIcon", stylesApiProps)}>
            {_icon as any}
          </span>
        )}
        <span {...ctx.getStyles("itemLabel", stylesApiProps)}>
          {children as any}
        </span>
      </div>
    </Box>
  );
});

ListItem.displayName = "@raikou/core/ListItem";
