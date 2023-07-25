import { CSSProperties } from "react";
import { RaikouStyleProp } from "../../../../Box";
import { RaikouTheme } from "../../../../RaikouProvider";

interface ResolveStyleInput {
  style: RaikouStyleProp | undefined;
  theme: RaikouTheme;
}

export function resolveStyle({
  style,
  theme,
}: ResolveStyleInput): CSSProperties {
  if (Array.isArray(style)) {
    return [...style].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {},
    );
  }

  if (typeof style === "function") {
    return style(theme);
  }

  if (style == null) {
    return {};
  }

  return style;
}
