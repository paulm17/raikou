import { GetStylesApi } from "@raikou/core";
import type { TimelineFactory } from "./Timeline";
import { create } from "zustand";

interface TimelineContext {
  getStyles: GetStylesApi<TimelineFactory> | any;
}

export const useStore = create<TimelineContext>(() => ({
  getStyles: undefined,
}));
