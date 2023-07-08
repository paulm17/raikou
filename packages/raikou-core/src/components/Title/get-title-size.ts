import { rem } from "../../core";
import type { TitleSize, TitleOrder } from "./Title";

const headings: unknown[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

export interface GetTitleSizeResult {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export function getTitleSize(
  order: TitleOrder,
  size: TitleSize | undefined
): GetTitleSizeResult {
  const titleSize = size !== undefined ? size : `h${order}`;

  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--raikou-${titleSize}-font-size)`,
      fontWeight: `var(--raikou-${titleSize}-font-weight)`,
      lineHeight: `var(--raikou-${titleSize}-line-height)`,
    };
  }

  return {
    fontSize: rem(titleSize),
    fontWeight: `var(--raikou-h${order}-font-weight)`,
    lineHeight: `var(--raikou-h${order}-line-height)`,
  };
}
