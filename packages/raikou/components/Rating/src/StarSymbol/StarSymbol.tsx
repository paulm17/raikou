import React from "react";
import { StarIcon } from "./StarIcon";
import { useRatingContext } from "../Rating.context";

export interface StarSymbolProps {
  type: "empty" | "full";
}

export function StarSymbol({ type }: StarSymbolProps) {
  const ctx = useRatingContext();
  return (
    <StarIcon
      {...ctx.getStyles("starSymbol")}
      data-filled={type === "full" || undefined}
    />
  );
}

StarSymbol.displayName = "@raikou/core/StarSymbol";
