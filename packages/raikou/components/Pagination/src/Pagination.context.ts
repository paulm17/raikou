import { GetStylesApi } from "@raikou/core";
import { createSafeContext } from "../../utils";
import type { PaginationRootFactory } from "./PaginationRoot/PaginationRoot";

interface PaginationContext {
  total: number;
  range: (number | "dots")[];
  active: number;
  disabled: boolean | undefined;
  // color: RaikouColor;
  // radius: RaikouNumberSize;
  getItemProps?(page: number): Record<string, any>;
  onChange(page: number): void;
  onNext(): void;
  onPrevious(): void;
  onFirst(): void;
  onLast(): void;
  getStyles: GetStylesApi<PaginationRootFactory>;
}

export const [PaginationProvider, usePaginationContext] =
  createSafeContext<PaginationContext>(
    "Pagination.Root component was not found in tree"
  );
