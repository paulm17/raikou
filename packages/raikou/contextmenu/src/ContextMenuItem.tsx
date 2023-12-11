import { Box, parseThemeColor, rgba } from "@raikou/core";
import { UnstyledButton } from "../../components/UnstyledButton/src";
import { useTimeout } from "@raikou/hooks";
import clsx from "clsx";
import React, {
  useContext,
  useRef,
  useState,
  type MouseEventHandler,
} from "react";
import { ContextMenu } from "./ContextMenu";
import { ContextMenuSettingsCtx } from "./ContextMenuProvider";
import type {
  ContextMenuContent,
  ContextMenuItemOptions,
  WithRequiredProperty,
} from "./types";
import classes from "./ContextMenuItem.module.css";

export function ContextMenuItem({
  className,
  style,
  icon,
  title,
  color,
  disabled,
  onClick,
  onHide,
  items,
}: WithRequiredProperty<Omit<ContextMenuItemOptions, "key">, "title"> & {
  onHide: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { submenuDelay } = useContext(ContextMenuSettingsCtx);

  const [submenuPosition, setSubmenuPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = onClick
    ? (e) => {
        onHide();
        onClick!(e);
      }
    : undefined;

  const { start: startShowingSubmenu, clear: stopShowingSubmenu } = useTimeout(
    () => {
      const { top: y, right: x } = ref.current!.getBoundingClientRect();
      setSubmenuPosition({ x, y });
    },
    submenuDelay,
  );

  const { start: startHidingSubmenu, clear: stopHidingSubmenu } = useTimeout(
    () => {
      setSubmenuPosition(null);
    },
    submenuDelay,
  );

  const showSubmenu = () => {
    stopHidingSubmenu();
    startShowingSubmenu();
  };

  const hideSubmenu = () => {
    stopShowingSubmenu();
    startHidingSubmenu();
  };

  const hasItemsAndIsNotDisabled = items && !disabled;

  return (
    <div
      onMouseEnter={hasItemsAndIsNotDisabled ? showSubmenu : undefined}
      onMouseLeave={hasItemsAndIsNotDisabled ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
        style={[
          (theme) => {
            const parsedColor = color
              ? parseThemeColor({ color, theme }).value
              : undefined;
            return {
              "--raikou-contextmenu-item-button-color": parsedColor
                ? parsedColor
                : "var(--raikou-color-text)",
              "--raikou-contextmenu-item-button-hover-bg-color-light":
                parsedColor ? rgba(parsedColor, 0.08) : rgba("#ced4da", 0.25),
              "--raikou-contextmenu-item-button-hover-bg-color-dark":
                parsedColor ? rgba(parsedColor, 0.15) : rgba("#5c5f66", 0.25),
              "--raikou-contextmenu-item-button-pressed-bg-color-light":
                parsedColor ? rgba(parsedColor, 0.2) : rgba("#ced4da", 0.5),
              "--raikou-contextmenu-item-button-pressed-bg-color-dark":
                parsedColor ? rgba(parsedColor, 0.3) : rgba("#5c5f66", 0.5),
            };
          },
          style,
        ]}
        className={clsx(classes["item-button"], className)}
        disabled={disabled}
        onClick={handleClick}
      >
        {icon && (
          <Box fz={0} mr="xs" mt={-2}>
            {icon}
          </Box>
        )}
        <div className={classes["button-title"]}>{title}</div>
        {items && (
          <Box fz={10} mt={-2} ml="xs">
            ▶
          </Box>
        )}
      </UnstyledButton>
      {submenuPosition && (
        <ContextMenu
          content={items as ContextMenuContent}
          onHide={onHide}
          {...submenuPosition}
        />
      )}
    </div>
  );
}
