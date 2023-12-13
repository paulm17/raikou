import { GetStylesApi } from "@raikou/core";
import type { AppShellFactory } from "./AppShell";
import createStore from "pure-store";

interface AppShellContext {
  getStyles: GetStylesApi<AppShellFactory> | any;
  withBorder: boolean | undefined;
  zIndex: React.CSSProperties["zIndex"];
  disabled: boolean | undefined;
  offsetScrollbars: boolean | undefined;
}

export const useStore = createStore<AppShellContext>({
  getStyles: undefined,
  withBorder: undefined,
  zIndex: 1,
  disabled: undefined,
  offsetScrollbars: undefined,
});
