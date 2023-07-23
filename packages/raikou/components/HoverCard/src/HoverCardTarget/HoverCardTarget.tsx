import React, { cloneElement, forwardRef } from "react";
import { isElement, createEventHandler, useProps } from "@raikou/core";
import { Popover, PopoverTargetProps } from "../../../Popover/src";
import { useHoverCardContext } from "../HoverCard.context";

export interface HoverCardTargetProps extends PopoverTargetProps {}

const defaultProps: Partial<HoverCardTargetProps> = {
  refProp: "ref",
};

export const HoverCardTarget = forwardRef<HTMLElement, HoverCardTargetProps>(
  (props, ref) => {
    const { children, refProp, ...others } = useProps(
      "HoverCardTarget",
      defaultProps,
      props,
    );

    if (!isElement(children)) {
      throw new Error(
        "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
      );
    }

    const ctx = useHoverCardContext();
    const onMouseEnter = createEventHandler(
      children.props.onMouseEnter,
      ctx.openDropdown,
    );
    const onMouseLeave = createEventHandler(
      children.props.onMouseLeave,
      ctx.closeDropdown,
    );

    return (
      <Popover.Target refProp={refProp} ref={ref} {...others}>
        {cloneElement(children as React.ReactElement, {
          onMouseEnter,
          onMouseLeave,
        })}
      </Popover.Target>
    );
  },
);

HoverCardTarget.displayName = "@raikou/core/HoverCardTarget";
