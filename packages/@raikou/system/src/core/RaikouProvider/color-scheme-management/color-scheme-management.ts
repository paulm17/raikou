import { useTheme as UseTheme } from 'next-themes';

export function useColorScheme() {
  const { theme: colorScheme, themes: allThemes, setTheme: setColorScheme } = UseTheme();

  return {
    colorScheme: colorScheme || 'system',
    allThemes,
    setColorScheme,
  };
}
