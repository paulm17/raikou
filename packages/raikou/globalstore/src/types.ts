import { colorNames, RaikouThemeOverride } from "@raikou/theme";

export interface RaikouTheme extends RaikouThemeOverride {
  primaryColor?: Colors;
  includeColors?: Colors[];
  excludeColors?: Colors[];
}

type Colors = (typeof colorNames)[number];
