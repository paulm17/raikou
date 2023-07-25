import { useColorScheme, UseMediaQueryOptions } from "@raikou/hooks";
import { useRaikouColorScheme } from "./use-raikou-color-scheme";

export function useComputedColorScheme(
  defaultValue: "light" | "dark",
  options: UseMediaQueryOptions = { getInitialValueInEffect: true }
) {
  const osColorScheme = useColorScheme(defaultValue, options);
  const { colorScheme } = useRaikouColorScheme();
  return colorScheme === "auto" ? osColorScheme : colorScheme;
}
