import { type RaikouTheme, DEFAULT_THEME } from "@raikou/core";
import { useMemo } from "react";
import { useMediaQueries } from "./useMediaQueries";

export function useMediaQueriesStringOrFunction(
  queries: (string | ((theme: RaikouTheme) => string) | undefined)[],
) {
  const theme = DEFAULT_THEME;
  const values = useMemo(
    () =>
      queries.map(
        (query) => (typeof query === "function" ? query(theme) : query) ?? "",
      ),
    [queries, theme],
  );
  const defaults = useMemo(() => queries.map(() => true), [queries]);
  return useMediaQueries(values, defaults);
}
