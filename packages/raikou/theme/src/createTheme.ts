import { colors } from "./colors";
import { RaikouThemeOverride } from "./theme.types";

export function createTheme(config: any): RaikouThemeOverride {
  const raikouColors = Object.keys(colors).reduce((acc, key) => {
    // default mantine colors
    const defaultColors = [
      "dark",
      "gray",
      "red",
      "pink",
      "grape",
      "violet",
      "indigo",
      "blue",
      "cyan",
      "teal",
      "green",
      "lime",
      "yellow",
      "orange",
    ];
    // extra unocss colors
    const unocssColors = [
      "rose",
      "fuchsia",
      "purple",
      "indigo",
      "sky",
      "emerald",
      "amber",
      "slate",
      "zinc",
      "neutral",
      "stone",
      "light",
    ];

    if ([...defaultColors, ...unocssColors].includes(key)) {
      // @ts-ignore
      Object.keys(colors[key]).forEach((shade) => {
        // Check if the color should be included or excluded
        const isIncluded =
          (!config.raikouTheme.includeColors ||
            config.raikouTheme.includeColors.includes(key)) &&
          (!config.raikouTheme.excludeColors ||
            !config.raikouTheme.excludeColors.includes(key));

        if (isIncluded) {
          if (!acc[key]) {
            acc[key] = [] as string[];
          }

          // @ts-ignore
          acc[key].push(colors[key][shade]);
        }
      });
    }

    return acc;
  }, {} as any);

  const raikouTheme = {
    colors: raikouColors,
  };

  // generate user override on theme
  const theme = {
    ...raikouTheme,
    ...(config as any).raikouTheme,
  };

  return theme;
}
