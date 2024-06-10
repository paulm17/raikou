import React, { forwardRef } from "react";
import { CloseButton, __CloseButtonProps } from "../../../CloseButton/src";
import { ElementProps, RaikouSize } from "../../../../core";

export interface ComboboxClearButtonProps
  extends __CloseButtonProps,
    ElementProps<"button"> {
  size?: RaikouSize | (string & {}) | number;
  onClear: () => void;
}

export const ComboboxClearButton = forwardRef<
  HTMLButtonElement,
  ComboboxClearButtonProps
>(({ size, onMouseDown, onClick, onClear, ...others }, ref) => (
  <CloseButton
    ref={ref}
    size={size || "sm"}
    variant="transparent"
    tabIndex={-1}
    aria-hidden
    {...others}
    onMouseDown={(event) => {
      event.preventDefault();
      onMouseDown?.(event);
    }}
    onClick={(event) => {
      onClear();
      onClick?.(event);
    }}
  />
));

ComboboxClearButton.displayName = "@raikou/core/ComboboxClearButton";
