// any file that is included in your tsconfig.json
import type { ExtendTheme } from "@stylefusion/react/theme";
import type { RaikouThemeColors } from "../packages/@raikou/core";

declare module "@stylefusion/react/theme" {
  interface ThemeTokens {
    // the structure of your theme
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: ThemeTokens;
      colors: RaikouThemeColors;
    }>;
  }
}
