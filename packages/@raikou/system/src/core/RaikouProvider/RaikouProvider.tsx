import { ThemeProvider } from 'next-themes';
// import type { RaikouColorScheme, RaikouThemeOverride } from "./theme.types";
import { DEFAULT_THEME } from './default-theme';
import { defaultCssVariablesResolver } from './RaikouCssVariables';
import { suppressNextjsWarning } from './suppress-nextjs-warning';

import './global.css';

import { useTheme } from '@stylefusion/react';
import { DEFAULT_COLORS } from './default-colors';
import { mergeRaikouTheme } from './merge-raikou-theme';
import { RaikouTheme } from './theme.types';
import { useRespectReduceMotion } from './use-respect-reduce-motion';

export interface RaikouProviderProps {
  /** Function to resolve root element to set `data-raikou-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  getRootElement?: () => HTMLElement | undefined;

  /** Store theme in local storage */
  themeStorageKey?: string;

  /** Your application */
  children?: React.ReactNode;
}

suppressNextjsWarning();

export function RaikouProvider({
  children,
  themeStorageKey = 'raikou-color-scheme',
  getRootElement = () => document.documentElement,
}: RaikouProviderProps) {
  const { theme: pigmentTheme } = useTheme();
  const theme = pigmentTheme.rawTheme as RaikouTheme;

  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement,
  });

  return (
    <ThemeProvider
      storageKey={themeStorageKey}
      themes={['light', 'dark']}
      attribute={`data-${themeStorageKey}`}
      enableColorScheme
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}

export function getPigmentCSSTheme(theme?: RaikouTheme) {
  const output = {} as Record<string, any>;
  const defaultTheme = mergeRaikouTheme(DEFAULT_THEME, theme);

  const input = {
    zIndexApp: '100',
    zIndexModal: '200',
    zIndexPopover: '300',
    zIndexOverlay: '400',
    zIndexMax: '400',
    webkitFontSmoothing: 'antialiased',
    colorScheme: 'light dark',
    mozFontSmoothing: 'grayscale',
    lineHeight: 1.55,
    radiusDefault: 'calc(0.25rem * var(--raikou-scale))',
  };

  for (const [key, value] of Object.entries(input)) {
    output[`${convertKeyToDelimitedWord(key)}`] = value;
  }

  const defaultCSSVariables = defaultCssVariablesResolver(defaultTheme);

  for (const [key, value] of Object.entries(defaultCSSVariables.variables)) {
    output[`${convertKeyToDelimitedWord(key)}`] = value;
  }

  const cssTheme = {
    ...output,
    colors: {
      black: '#000',
      white: '#fff',
      ...createIndexedColors(),
    },
    colorSchemes: {
      light: {
        ...defaultCSSVariables.light,
      },
      dark: {
        ...defaultCSSVariables.dark,
      },
    },
  };

  return { cssTheme, rawTheme: defaultTheme };
}

function convertKeyToDelimitedWord(key: string) {
  return key
    .replace(/([A-Z])/g, '-$1')
    .replace(/^-/, '')
    .replace(/([A-Z]{2,})/g, (match) => {
      if (['XS', 'SM', 'MD', 'LG', 'XL'].includes(match)) {
        return match.toLowerCase();
      }
      return match;
    })
    .toLowerCase();
}

function createIndexedColors() {
  return Object.fromEntries(
    Object.entries(DEFAULT_COLORS).map(([color, shades]) => [
      color,
      Object.fromEntries(shades.map((shade, index) => [index.toString(), shade])),
    ])
  );
}
