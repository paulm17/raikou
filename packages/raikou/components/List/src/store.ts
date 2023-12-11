import { GetStylesApi } from "@raikou/core";
import type { ListFactory } from "./List";
import createStore from "pure-store";

interface ListContextValue {
  getStyles: GetStylesApi<ListFactory> | any;
  center: boolean | undefined;
  icon: React.ReactNode | undefined;
}

export const useStore = createStore<ListContextValue>({
  getStyles: undefined,
  center: undefined,
  icon: undefined,
});
