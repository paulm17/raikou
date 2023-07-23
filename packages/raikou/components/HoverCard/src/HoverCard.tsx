import React from "react";
import { useDisclosure } from "@raikou/hooks";
import { useProps } from "@raikou/core";
import { useDelayedHover } from "../../Floating/src";
import { Popover, PopoverProps } from "../../Popover/src";
import { HoverCardContextProvider } from "./HoverCard.context";
import { HoverCardDropdown } from "./HoverCardDropdown/HoverCardDropdown";
import { HoverCardTarget } from "./HoverCardTarget/HoverCardTarget";

export interface HoverCardProps extends PopoverProps {
  variant?: string;

  /** Initial opened state */
  initiallyOpened?: boolean;

  /** Called when dropdown is opened */
  onOpen?(): void;

  /** Called when dropdown is closed */
  onClose?(): void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

const defaultProps: Partial<HoverCardProps> = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: false,
};

export function HoverCard(props: HoverCardProps) {
  const {
    children,
    onOpen,
    onClose,
    openDelay,
    closeDelay,
    initiallyOpened,
    ...others
  } = useProps("HoverCard", defaultProps, props);
  const [opened, { open, close }] = useDisclosure(initiallyOpened, {
    onClose,
    onOpen,
  });
  const { openDropdown, closeDropdown } = useDelayedHover({
    open,
    close,
    openDelay,
    closeDelay,
  });

  return (
    <HoverCardContextProvider value={{ openDropdown, closeDropdown }}>
      <Popover {...others} opened={opened} __staticSelector="HoverCard">
        {children}
      </Popover>
    </HoverCardContextProvider>
  );
}

HoverCard.displayName = "@raikou/core/HoverCard";
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
