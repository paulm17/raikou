import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../_utils";
import type { CardFactory } from "./Card";

interface CardContextValue {
  getStyles: GetStylesApi<CardFactory>;
}

export const [CardProvider, useCardContext] =
  createSafeContext<CardContextValue>("Card component was not found in tree");
