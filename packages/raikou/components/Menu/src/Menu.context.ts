import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { MenuFactory } from "./Menu";

interface MenuContext {
  toggleDropdown: () => void;
  closeDropdownImmediately: () => void;
  closeDropdown: () => void;
  openDropdown: () => void;
  getItemIndex: (node: HTMLButtonElement) => number | null;
  setHovered: (index: number | null) => void;
  hovered: number | null;
  closeOnItemClick: boolean | undefined;
  loop: boolean | undefined;
  trigger: "click" | "hover" | undefined;
  opened: boolean;
  getStyles: GetStylesApi<MenuFactory>;
}

export const [MenuContextProvider, useMenuContext] =
  createSafeContext<MenuContext>("Menu component was not found in the tree");
