import { CSSProperties } from "react";
import { CssVariable } from "../../../../Box";
import { RaikouTheme } from "../../../../RaikouProvider";
import { mergeVars } from "./merge-vars";
import { rem } from "../../../../utils/units-converters";

type ResolvedVars = Partial<Record<string, Record<CssVariable, string>>>;

export type VarsResolver = (
  theme: RaikouTheme,
  props: Record<string, any>,
  stylesCtx: Record<string, any> | undefined,
) => ResolvedVars;

interface ResolveVarsInput {
  vars: VarsResolver | undefined;
  varsResolver: VarsResolver | undefined;
  theme: RaikouTheme;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
  selector: string;
  themeName: string[];
}

export function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
}: ResolveVarsInput) {
  return mergeVars([
    varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((name) => {
      const vars2 = new Function(
        "theme",
        "props",
        "stylesCtx",
        "rem",
        theme.components?.[name]?.vars,
      );

      return vars2?.(theme, props, stylesCtx, rem);
    }),
    vars?.(theme, props, stylesCtx),
  ])?.[selector] as CSSProperties;
}
