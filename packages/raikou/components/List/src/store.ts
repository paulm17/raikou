import { GetStylesApi } from "@raikou/core";
import type { ListFactory } from "./List";
import { create } from "zustand";

interface ListContextValue {
  getStyles: GetStylesApi<ListFactory> | any;
  center: boolean | undefined;
  icon: React.ReactNode | undefined;
}

export const useStore = create<ListContextValue>(() => ({
  getStyles: undefined,
  center: undefined,
  icon: undefined,
}));
