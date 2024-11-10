import { useMemo } from 'react';
import { useRaikouTheme, type RaikouTheme } from '@raikou/core';
import { useMediaQueries } from './useMediaQueries';

export function useMediaQueriesStringOrFunction(
  queries: (string | ((theme: RaikouTheme) => string) | undefined)[]
) {
  const theme = useRaikouTheme();
  const values = useMemo(
    () => queries.map((query) => (typeof query === 'function' ? query(theme) : query) ?? ''),
    [queries, theme]
  );
  const defaults = useMemo(() => queries.map(() => true), [queries]);
  return useMediaQueries(values, defaults);
}
