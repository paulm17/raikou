import type { RaikouTheme } from "../../RaikouProvider";
import type { RaikouStyleProp, CssVarsProp } from "../Box.types";

interface GetBoxStyleOptions {
  theme: RaikouTheme;
  styleProps: React.CSSProperties;
  style?: RaikouStyleProp;
  vars?: CssVarsProp;
}

function mergeStyles(
  styles: RaikouStyleProp | CssVarsProp | undefined,
  theme: RaikouTheme,
): React.CSSProperties {
  if (Array.isArray(styles)) {
    return [...styles].reduce<Record<string, any>>(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {},
    );
  }

  if (typeof styles === "function") {
    return styles(theme);
  }

  if (styles == null) {
    return {};
  }

  return styles;
}

export function getBoxStyle({
  theme,
  style,
  vars,
  styleProps,
}: GetBoxStyleOptions): React.CSSProperties {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}
