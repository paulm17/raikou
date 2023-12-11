import { GetStylesApi } from "@raikou/core";
import type { TimelineFactory } from "./Timeline";
import createStore from "pure-store";

interface TimelineContext {
  getStyles: GetStylesApi<TimelineFactory> | any;
}

export const useStore = createStore<TimelineContext>({
  getStyles: undefined,
});
