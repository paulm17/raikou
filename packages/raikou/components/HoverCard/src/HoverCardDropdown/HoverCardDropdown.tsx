import React from "react";
import { createEventHandler, useProps } from "@raikou/core";
import { Popover, PopoverDropdownProps } from "../../../Popover/src";
import { useHoverCardContext } from "../HoverCard.context";

export interface HoverCardDropdownProps extends PopoverDropdownProps {
  /** Dropdown content */
  children?: React.ReactNode;
}

const defaultProps: Partial<HoverCardDropdownProps> = {};

export function HoverCardDropdown(props: HoverCardDropdownProps) {
  const { children, onMouseEnter, onMouseLeave, ...others } = useProps(
    "HoverCardDropdown",
    defaultProps,
    props,
  );

  const ctx = useHoverCardContext();

  const handleMouseEnter = createEventHandler<any>(
    onMouseEnter,
    ctx.openDropdown,
  );
  const handleMouseLeave = createEventHandler<any>(
    onMouseLeave!,
    ctx.closeDropdown,
  );

  return (
    <Popover.Dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...others}
    >
      {children}
    </Popover.Dropdown>
  );
}

HoverCardDropdown.displayName = "@raikou/core/HoverCardDropdown";
