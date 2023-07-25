import cx from "clsx";
import { GetStylesApiOptions } from "../../../styles-api.types";
import { RaikouTheme } from "../../../../RaikouProvider";

interface GetGlobalClassNamesOptions {
  theme: RaikouTheme;
  unstyled: boolean | undefined;
  options: GetStylesApiOptions | undefined;
}

export const FOCUS_CLASS_NAMES = {
  always: "raikou-focus-always",
  auto: "raikou-focus-auto",
  never: "raikou-focus-never",
} as const;

/** Returns classes that are defined globally (focus and active styles) based on options */
export function getGlobalClassNames({
  theme,
  options,
  unstyled,
}: GetGlobalClassNamesOptions) {
  return cx(
    options?.focusable &&
      !unstyled &&
      (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName,
  );
}
