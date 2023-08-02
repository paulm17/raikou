import { GetStylesApi } from "@raikou/core";
import type { AppShellFactory } from "./AppShell";
import { create } from "zustand";

interface AppShellContext {
  getStyles: GetStylesApi<AppShellFactory> | any;
  withBorder: boolean | undefined;
  zIndex: React.CSSProperties["zIndex"];
  disabled: boolean | undefined;
}

export const useStore = create<AppShellContext>(() => ({
  getStyles: undefined,
  withBorder: undefined,
  zIndex: 1,
  disabled: undefined,
}));
