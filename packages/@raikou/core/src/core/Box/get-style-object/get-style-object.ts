import type { RaikouTheme } from "../../RaikouProvider";
import type { RaikouStyleProp } from "../Box.types";

export function getStyleObject(
  style: RaikouStyleProp | undefined,
  theme: RaikouTheme,
): React.CSSProperties {
  if (Array.isArray(style)) {
    return [...style].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
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
