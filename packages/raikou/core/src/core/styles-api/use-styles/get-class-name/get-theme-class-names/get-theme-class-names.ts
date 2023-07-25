import { RaikouTheme } from "../../../../RaikouProvider";
import { resolveClassNames } from "../resolve-class-names/resolve-class-names";

interface GetThemeClassNamesOptions {
  theme: RaikouTheme;
  themeName: string[];
  selector: string;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}

export function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx,
}: GetThemeClassNamesOptions) {
  return themeName.map(
    (n) =>
      resolveClassNames({
        theme,
        classNames: theme.components[n]?.classNames,
        props,
        stylesCtx,
      })?.[selector],
  );
}
