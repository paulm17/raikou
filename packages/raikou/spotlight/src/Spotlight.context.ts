import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../components/_utils";
import type { SpotlightRootFactory } from "./SpotlightRoot";
import { SpotlightStore } from "./spotlight.store";

interface SpotlightContextValue {
  query: string;
  setQuery(query: string): void;
  getStyles: GetStylesApi<SpotlightRootFactory>;
  store: SpotlightStore;
  closeOnActionTrigger: boolean | undefined;
}

export const [SpotlightProvider, useSpotlightContext] =
  createSafeContext<SpotlightContextValue>(
    "Spotlight component was not found in tree",
  );
