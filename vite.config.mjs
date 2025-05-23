import { extendTheme, pigment } from '@stylefusion/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const rawTheme = {
  scale: 1,
  fontSmoothing: true,
  focusRing: 'auto',
  white: '#fff',
  black: '#000',
  colors: {
    dark: [
      '#C9C9C9',
      '#b8b8b8',
      '#828282',
      '#696969',
      '#424242',
      '#3b3b3b',
      '#2e2e2e',
      '#242424',
      '#1f1f1f',
      '#141414',
    ],
    gray: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#fa5252',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
    pink: [
      '#fff0f6',
      '#ffdeeb',
      '#fcc2d7',
      '#faa2c1',
      '#f783ac',
      '#f06595',
      '#e64980',
      '#d6336c',
      '#c2255c',
      '#a61e4d',
    ],
    grape: [
      '#f8f0fc',
      '#f3d9fa',
      '#eebefa',
      '#e599f7',
      '#da77f2',
      '#cc5de8',
      '#be4bdb',
      '#ae3ec9',
      '#9c36b5',
      '#862e9c',
    ],
    violet: [
      '#f3f0ff',
      '#e5dbff',
      '#d0bfff',
      '#b197fc',
      '#9775fa',
      '#845ef7',
      '#7950f2',
      '#7048e8',
      '#6741d9',
      '#5f3dc4',
    ],
    indigo: [
      '#edf2ff',
      '#dbe4ff',
      '#bac8ff',
      '#91a7ff',
      '#748ffc',
      '#5c7cfa',
      '#4c6ef5',
      '#4263eb',
      '#3b5bdb',
      '#364fc7',
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab',
    ],
    cyan: [
      '#e3fafc',
      '#c5f6fa',
      '#99e9f2',
      '#66d9e8',
      '#3bc9db',
      '#22b8cf',
      '#15aabf',
      '#1098ad',
      '#0c8599',
      '#0b7285',
    ],
    teal: [
      '#e6fcf5',
      '#c3fae8',
      '#96f2d7',
      '#63e6be',
      '#38d9a9',
      '#20c997',
      '#12b886',
      '#0ca678',
      '#099268',
      '#087f5b',
    ],
    green: [
      '#ebfbee',
      '#d3f9d8',
      '#b2f2bb',
      '#8ce99a',
      '#69db7c',
      '#51cf66',
      '#40c057',
      '#37b24d',
      '#2f9e44',
      '#2b8a3e',
    ],
    lime: [
      '#f4fce3',
      '#e9fac8',
      '#d8f5a2',
      '#c0eb75',
      '#a9e34b',
      '#94d82d',
      '#82c91e',
      '#74b816',
      '#66a80f',
      '#5c940d',
    ],
    yellow: [
      '#fff9db',
      '#fff3bf',
      '#ffec99',
      '#ffe066',
      '#ffd43b',
      '#fcc419',
      '#fab005',
      '#f59f00',
      '#f08c00',
      '#e67700',
    ],
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#ff922b',
      '#fd7e14',
      '#f76707',
      '#e8590c',
      '#d9480f',
    ],
  },
  primaryShade: { light: 6, dark: 8 },
  primaryColor: 'blue',
  variantColorResolver: () => {},
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  respectReducedMotion: false,
  cursorType: 'default',
  defaultGradient: { from: 'blue', to: 'cyan', deg: 45 },
  defaultRadius: 'sm',
  activeClassName: 'raikou-active',
  focusClassName: '',
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: '700',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize: 'calc(2.125rem * var(--raikou-scale))',
        lineHeight: '1.3',
      },
      h2: {
        fontSize: 'calc(1.625rem * var(--raikou-scale))',
        lineHeight: '1.35',
      },
      h3: {
        fontSize: 'calc(1.375rem * var(--raikou-scale))',
        lineHeight: '1.4',
      },
      h4: {
        fontSize: 'calc(1.125rem * var(--raikou-scale))',
        lineHeight: '1.45',
      },
      h5: { fontSize: 'calc(1rem * var(--raikou-scale))', lineHeight: '1.5' },
      h6: {
        fontSize: 'calc(0.875rem * var(--raikou-scale))',
        lineHeight: '1.5',
      },
    },
  },
  fontSizes: {
    xs: 'calc(0.75rem * var(--raikou-scale))',
    sm: 'calc(0.875rem * var(--raikou-scale))',
    md: 'calc(1rem * var(--raikou-scale))',
    lg: 'calc(1.125rem * var(--raikou-scale))',
    xl: 'calc(1.25rem * var(--raikou-scale))',
  },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.55', lg: '1.6', xl: '1.65' },
  radius: {
    xs: 'calc(0.125rem * var(--raikou-scale))',
    sm: 'calc(0.25rem * var(--raikou-scale))',
    md: 'calc(0.5rem * var(--raikou-scale))',
    lg: 'calc(1rem * var(--raikou-scale))',
    xl: 'calc(2rem * var(--raikou-scale))',
  },
  spacing: {
    xs: 'calc(0.625rem * var(--raikou-scale))',
    sm: 'calc(0.75rem * var(--raikou-scale))',
    md: 'calc(1rem * var(--raikou-scale))',
    lg: 'calc(1.25rem * var(--raikou-scale))',
    xl: 'calc(2rem * var(--raikou-scale))',
  },
  breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
  shadows: {
    xs: '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--raikou-scale)) calc(0.125rem * var(--raikou-scale)) rgba(0, 0, 0, 0.1)',
    sm: '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--raikou-scale)) calc(0.9375rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--raikou-scale)) calc(0.4375rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale))',
    md: '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--raikou-scale)) calc(1.5625rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--raikou-scale)) calc(0.625rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale))',
    lg: '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--raikou-scale)) calc(1.4375rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--raikou-scale)) calc(0.75rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale))',
    xl: '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--raikou-scale)) calc(1.75rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--raikou-scale)) calc(1.0625rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale))',
  },
  other: {},
  components: {},
};

const cssTheme = {
  'z-index-app': '100',
  'z-index-modal': '200',
  'z-index-popover': '300',
  'z-index-overlay': '400',
  'z-index-max': '400',
  'webkit-font-smoothing': 'antialiased',
  'color-scheme': 'light dark',
  'moz-font-smoothing': 'grayscale',
  'line-height': '1.55',
  'radius-default': 'calc(0.25rem * var(--raikou-scale))',
  scale: '1',
  'cursor-type': 'default',
  'color-white': '#fff',
  'color-black': '#000',
  'font-family':
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  'font-family-monospace':
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  'font-family-headings':
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  'heading-font-weight': '700',
  'heading-text-wrap': 'wrap',
  'primary-color-filled': 'var(--raikou-color-blue-filled)',
  'primary-color-filled-hover': 'var(--raikou-color-blue-filled-hover)',
  'primary-color-light': 'var(--raikou-color-blue-light)',
  'primary-color-light-hover': 'var(--raikou-color-blue-light-hover)',
  'primary-color-light-color': 'var(--raikou-color-blue-light-color)',
  'gradient-from': '#d0ebff',
  'gradient-to': '#1971c2',
  'gradient-deg': 45,
  'breakpoint-xs': '36em',
  'breakpoint-sm': '48em',
  'breakpoint-md': '62em',
  'breakpoint-lg': '75em',
  'breakpoint-xl': '88em',
  'spacing-xs': 'calc(0.625rem * var(--raikou-scale))',
  'spacing-sm': 'calc(0.75rem * var(--raikou-scale))',
  'spacing-md': 'calc(1rem * var(--raikou-scale))',
  'spacing-lg': 'calc(1.25rem * var(--raikou-scale))',
  'spacing-xl': 'calc(2rem * var(--raikou-scale))',
  'font-size-xs': 'calc(0.75rem * var(--raikou-scale))',
  'font-size-sm': 'calc(0.875rem * var(--raikou-scale))',
  'font-size-md': 'calc(1rem * var(--raikou-scale))',
  'font-size-lg': 'calc(1.125rem * var(--raikou-scale))',
  'font-size-xl': 'calc(1.25rem * var(--raikou-scale))',
  'line-height-xs': '1.4',
  'line-height-sm': '1.45',
  'line-height-md': '1.55',
  'line-height-lg': '1.6',
  'line-height-xl': '1.65',
  'shadow-xs':
    '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--raikou-scale)) calc(0.125rem * var(--raikou-scale)) rgba(0, 0, 0, 0.1)',
  'shadow-sm':
    '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--raikou-scale)) calc(0.9375rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--raikou-scale)) calc(0.4375rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale))',
  'shadow-md':
    '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--raikou-scale)) calc(1.5625rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--raikou-scale)) calc(0.625rem * var(--raikou-scale)) calc(-0.3125rem * var(--raikou-scale))',
  'shadow-lg':
    '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--raikou-scale)) calc(1.4375rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--raikou-scale)) calc(0.75rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale))',
  'shadow-xl':
    '0 calc(0.0625rem * var(--raikou-scale)) calc(0.1875rem * var(--raikou-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--raikou-scale)) calc(1.75rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--raikou-scale)) calc(1.0625rem * var(--raikou-scale)) calc(-0.4375rem * var(--raikou-scale))',
  'radius-xs': 'calc(0.125rem * var(--raikou-scale))',
  'radius-sm': 'calc(0.25rem * var(--raikou-scale))',
  'radius-md': 'calc(0.5rem * var(--raikou-scale))',
  'radius-lg': 'calc(1rem * var(--raikou-scale))',
  'radius-xl': 'calc(2rem * var(--raikou-scale))',
  'color-0': 'var(raikou-color-blue-0)',
  'color-1': 'var(raikou-color-blue-1)',
  'color-2': 'var(raikou-color-blue-2)',
  'color-3': 'var(raikou-color-blue-3)',
  'color-4': 'var(raikou-color-blue-4)',
  'color-5': 'var(raikou-color-blue-5)',
  'color-6': 'var(raikou-color-blue-6)',
  'color-7': 'var(raikou-color-blue-7)',
  'color-8': 'var(raikou-color-blue-8)',
  'color-9': 'var(raikou-color-blue-9)',
  'color-dark-0': '#C9C9C9',
  'color-dark-1': '#b8b8b8',
  'color-dark-2': '#828282',
  'color-dark-3': '#696969',
  'color-dark-4': '#424242',
  'color-dark-5': '#3b3b3b',
  'color-dark-6': '#2e2e2e',
  'color-dark-7': '#242424',
  'color-dark-8': '#1f1f1f',
  'color-dark-9': '#141414',
  'color-gray-0': '#f8f9fa',
  'color-gray-1': '#f1f3f5',
  'color-gray-2': '#e9ecef',
  'color-gray-3': '#dee2e6',
  'color-gray-4': '#ced4da',
  'color-gray-5': '#adb5bd',
  'color-gray-6': '#868e96',
  'color-gray-7': '#495057',
  'color-gray-8': '#343a40',
  'color-gray-9': '#212529',
  'color-red-0': '#fff5f5',
  'color-red-1': '#ffe3e3',
  'color-red-2': '#ffc9c9',
  'color-red-3': '#ffa8a8',
  'color-red-4': '#ff8787',
  'color-red-5': '#ff6b6b',
  'color-red-6': '#fa5252',
  'color-red-7': '#f03e3e',
  'color-red-8': '#e03131',
  'color-red-9': '#c92a2a',
  'color-pink-0': '#fff0f6',
  'color-pink-1': '#ffdeeb',
  'color-pink-2': '#fcc2d7',
  'color-pink-3': '#faa2c1',
  'color-pink-4': '#f783ac',
  'color-pink-5': '#f06595',
  'color-pink-6': '#e64980',
  'color-pink-7': '#d6336c',
  'color-pink-8': '#c2255c',
  'color-pink-9': '#a61e4d',
  'color-grape-0': '#f8f0fc',
  'color-grape-1': '#f3d9fa',
  'color-grape-2': '#eebefa',
  'color-grape-3': '#e599f7',
  'color-grape-4': '#da77f2',
  'color-grape-5': '#cc5de8',
  'color-grape-6': '#be4bdb',
  'color-grape-7': '#ae3ec9',
  'color-grape-8': '#9c36b5',
  'color-grape-9': '#862e9c',
  'color-violet-0': '#f3f0ff',
  'color-violet-1': '#e5dbff',
  'color-violet-2': '#d0bfff',
  'color-violet-3': '#b197fc',
  'color-violet-4': '#9775fa',
  'color-violet-5': '#845ef7',
  'color-violet-6': '#7950f2',
  'color-violet-7': '#7048e8',
  'color-violet-8': '#6741d9',
  'color-violet-9': '#5f3dc4',
  'color-indigo-0': '#edf2ff',
  'color-indigo-1': '#dbe4ff',
  'color-indigo-2': '#bac8ff',
  'color-indigo-3': '#91a7ff',
  'color-indigo-4': '#748ffc',
  'color-indigo-5': '#5c7cfa',
  'color-indigo-6': '#4c6ef5',
  'color-indigo-7': '#4263eb',
  'color-indigo-8': '#3b5bdb',
  'color-indigo-9': '#364fc7',
  'color-blue-0': '#e7f5ff',
  'color-blue-1': '#d0ebff',
  'color-blue-2': '#a5d8ff',
  'color-blue-3': '#74c0fc',
  'color-blue-4': '#4dabf7',
  'color-blue-5': '#339af0',
  'color-blue-6': '#228be6',
  'color-blue-7': '#1c7ed6',
  'color-blue-8': '#1971c2',
  'color-blue-9': '#1864ab',
  'color-cyan-0': '#e3fafc',
  'color-cyan-1': '#c5f6fa',
  'color-cyan-2': '#99e9f2',
  'color-cyan-3': '#66d9e8',
  'color-cyan-4': '#3bc9db',
  'color-cyan-5': '#22b8cf',
  'color-cyan-6': '#15aabf',
  'color-cyan-7': '#1098ad',
  'color-cyan-8': '#0c8599',
  'color-cyan-9': '#0b7285',
  'color-teal-0': '#e6fcf5',
  'color-teal-1': '#c3fae8',
  'color-teal-2': '#96f2d7',
  'color-teal-3': '#63e6be',
  'color-teal-4': '#38d9a9',
  'color-teal-5': '#20c997',
  'color-teal-6': '#12b886',
  'color-teal-7': '#0ca678',
  'color-teal-8': '#099268',
  'color-teal-9': '#087f5b',
  'color-green-0': '#ebfbee',
  'color-green-1': '#d3f9d8',
  'color-green-2': '#b2f2bb',
  'color-green-3': '#8ce99a',
  'color-green-4': '#69db7c',
  'color-green-5': '#51cf66',
  'color-green-6': '#40c057',
  'color-green-7': '#37b24d',
  'color-green-8': '#2f9e44',
  'color-green-9': '#2b8a3e',
  'color-lime-0': '#f4fce3',
  'color-lime-1': '#e9fac8',
  'color-lime-2': '#d8f5a2',
  'color-lime-3': '#c0eb75',
  'color-lime-4': '#a9e34b',
  'color-lime-5': '#94d82d',
  'color-lime-6': '#82c91e',
  'color-lime-7': '#74b816',
  'color-lime-8': '#66a80f',
  'color-lime-9': '#5c940d',
  'color-yellow-0': '#fff9db',
  'color-yellow-1': '#fff3bf',
  'color-yellow-2': '#ffec99',
  'color-yellow-3': '#ffe066',
  'color-yellow-4': '#ffd43b',
  'color-yellow-5': '#fcc419',
  'color-yellow-6': '#fab005',
  'color-yellow-7': '#f59f00',
  'color-yellow-8': '#f08c00',
  'color-yellow-9': '#e67700',
  'color-orange-0': '#fff4e6',
  'color-orange-1': '#ffe8cc',
  'color-orange-2': '#ffd8a8',
  'color-orange-3': '#ffc078',
  'color-orange-4': '#ffa94d',
  'color-orange-5': '#ff922b',
  'color-orange-6': '#fd7e14',
  'color-orange-7': '#f76707',
  'color-orange-8': '#e8590c',
  'color-orange-9': '#d9480f',
  'h1-font-size': 'calc(2.125rem * var(--raikou-scale))',
  'h1-line-height': '1.3',
  'h1-font-weight': '700',
  'h2-font-size': 'calc(1.625rem * var(--raikou-scale))',
  'h2-line-height': '1.35',
  'h2-font-weight': '700',
  'h3-font-size': 'calc(1.375rem * var(--raikou-scale))',
  'h3-line-height': '1.4',
  'h3-font-weight': '700',
  'h4-font-size': 'calc(1.125rem * var(--raikou-scale))',
  'h4-line-height': '1.45',
  'h4-font-weight': '700',
  'h5-font-size': 'calc(1rem * var(--raikou-scale))',
  'h5-line-height': '1.5',
  'h5-font-weight': '700',
  'h6-font-size': 'calc(0.875rem * var(--raikou-scale))',
  'h6-line-height': '1.5',
  'h6-font-weight': '700',
  colors: {
    black: '#000',
    white: '#fff',
    dark: {
      0: '#C9C9C9',
      1: '#b8b8b8',
      2: '#828282',
      3: '#696969',
      4: '#424242',
      5: '#3b3b3b',
      6: '#2e2e2e',
      7: '#242424',
      8: '#1f1f1f',
      9: '#141414',
    },
    gray: {
      0: '#f8f9fa',
      1: '#f1f3f5',
      2: '#e9ecef',
      3: '#dee2e6',
      4: '#ced4da',
      5: '#adb5bd',
      6: '#868e96',
      7: '#495057',
      8: '#343a40',
      9: '#212529',
    },
    red: {
      0: '#fff5f5',
      1: '#ffe3e3',
      2: '#ffc9c9',
      3: '#ffa8a8',
      4: '#ff8787',
      5: '#ff6b6b',
      6: '#fa5252',
      7: '#f03e3e',
      8: '#e03131',
      9: '#c92a2a',
    },
    pink: {
      0: '#fff0f6',
      1: '#ffdeeb',
      2: '#fcc2d7',
      3: '#faa2c1',
      4: '#f783ac',
      5: '#f06595',
      6: '#e64980',
      7: '#d6336c',
      8: '#c2255c',
      9: '#a61e4d',
    },
    grape: {
      0: '#f8f0fc',
      1: '#f3d9fa',
      2: '#eebefa',
      3: '#e599f7',
      4: '#da77f2',
      5: '#cc5de8',
      6: '#be4bdb',
      7: '#ae3ec9',
      8: '#9c36b5',
      9: '#862e9c',
    },
    violet: {
      0: '#f3f0ff',
      1: '#e5dbff',
      2: '#d0bfff',
      3: '#b197fc',
      4: '#9775fa',
      5: '#845ef7',
      6: '#7950f2',
      7: '#7048e8',
      8: '#6741d9',
      9: '#5f3dc4',
    },
    indigo: {
      0: '#edf2ff',
      1: '#dbe4ff',
      2: '#bac8ff',
      3: '#91a7ff',
      4: '#748ffc',
      5: '#5c7cfa',
      6: '#4c6ef5',
      7: '#4263eb',
      8: '#3b5bdb',
      9: '#364fc7',
    },
    blue: {
      0: '#e7f5ff',
      1: '#d0ebff',
      2: '#a5d8ff',
      3: '#74c0fc',
      4: '#4dabf7',
      5: '#339af0',
      6: '#228be6',
      7: '#1c7ed6',
      8: '#1971c2',
      9: '#1864ab',
    },
    cyan: {
      0: '#e3fafc',
      1: '#c5f6fa',
      2: '#99e9f2',
      3: '#66d9e8',
      4: '#3bc9db',
      5: '#22b8cf',
      6: '#15aabf',
      7: '#1098ad',
      8: '#0c8599',
      9: '#0b7285',
    },
    teal: {
      0: '#e6fcf5',
      1: '#c3fae8',
      2: '#96f2d7',
      3: '#63e6be',
      4: '#38d9a9',
      5: '#20c997',
      6: '#12b886',
      7: '#0ca678',
      8: '#099268',
      9: '#087f5b',
    },
    green: {
      0: '#ebfbee',
      1: '#d3f9d8',
      2: '#b2f2bb',
      3: '#8ce99a',
      4: '#69db7c',
      5: '#51cf66',
      6: '#40c057',
      7: '#37b24d',
      8: '#2f9e44',
      9: '#2b8a3e',
    },
    lime: {
      0: '#f4fce3',
      1: '#e9fac8',
      2: '#d8f5a2',
      3: '#c0eb75',
      4: '#a9e34b',
      5: '#94d82d',
      6: '#82c91e',
      7: '#74b816',
      8: '#66a80f',
      9: '#5c940d',
    },
    yellow: {
      0: '#fff9db',
      1: '#fff3bf',
      2: '#ffec99',
      3: '#ffe066',
      4: '#ffd43b',
      5: '#fcc419',
      6: '#fab005',
      7: '#f59f00',
      8: '#f08c00',
      9: '#e67700',
    },
    orange: {
      0: '#fff4e6',
      1: '#ffe8cc',
      2: '#ffd8a8',
      3: '#ffc078',
      4: '#ffa94d',
      5: '#ff922b',
      6: '#fd7e14',
      7: '#f76707',
      8: '#e8590c',
      9: '#d9480f',
    },
  },
  colorSchemes: {
    light: {
      'color-contrast': 'var(--raikou-color-white)',
      'color-bright': 'var(--raikou-color-black)',
      'color-text': '#000',
      'color-body': '#fff',
      'color-error': 'var(--raikou-color-red-6)',
      'color-placeholder': 'var(--raikou-color-gray-5)',
      'color-anchor': 'var(--raikou-color-blue-6)',
      'color-default': 'var(--raikou-color-white)',
      'color-default-hover': 'var(--raikou-color-gray-0)',
      'color-default-color': 'var(--raikou-color-black)',
      'color-default-border': 'var(--raikou-color-gray-4)',
      'color-dimmed': 'var(--raikou-color-gray-6)',
      'color-dark-text': 'var(--raikou-color-dark-filled)',
      'color-dark-filled': 'var(--raikou-color-dark-6)',
      'color-dark-filled-hover': 'var(--raikou-color-dark-7)',
      'color-dark-light': 'rgba(46, 46, 46, 0.1)',
      'color-dark-light-hover': 'rgba(46, 46, 46, 0.12)',
      'color-dark-light-color': 'var(--raikou-color-dark-6)',
      'color-dark-outline': 'var(--raikou-color-dark-6)',
      'color-dark-outline-hover': 'rgba(46, 46, 46, 0.05)',
      'color-gray-text': 'var(--raikou-color-gray-filled)',
      'color-gray-filled': 'var(--raikou-color-gray-6)',
      'color-gray-filled-hover': 'var(--raikou-color-gray-7)',
      'color-gray-light': 'rgba(134, 142, 150, 0.1)',
      'color-gray-light-hover': 'rgba(134, 142, 150, 0.12)',
      'color-gray-light-color': 'var(--raikou-color-gray-6)',
      'color-gray-outline': 'var(--raikou-color-gray-6)',
      'color-gray-outline-hover': 'rgba(134, 142, 150, 0.05)',
      'color-red-text': 'var(--raikou-color-red-filled)',
      'color-red-filled': 'var(--raikou-color-red-6)',
      'color-red-filled-hover': 'var(--raikou-color-red-7)',
      'color-red-light': 'rgba(250, 82, 82, 0.1)',
      'color-red-light-hover': 'rgba(250, 82, 82, 0.12)',
      'color-red-light-color': 'var(--raikou-color-red-6)',
      'color-red-outline': 'var(--raikou-color-red-6)',
      'color-red-outline-hover': 'rgba(250, 82, 82, 0.05)',
      'color-pink-text': 'var(--raikou-color-pink-filled)',
      'color-pink-filled': 'var(--raikou-color-pink-6)',
      'color-pink-filled-hover': 'var(--raikou-color-pink-7)',
      'color-pink-light': 'rgba(230, 73, 128, 0.1)',
      'color-pink-light-hover': 'rgba(230, 73, 128, 0.12)',
      'color-pink-light-color': 'var(--raikou-color-pink-6)',
      'color-pink-outline': 'var(--raikou-color-pink-6)',
      'color-pink-outline-hover': 'rgba(230, 73, 128, 0.05)',
      'color-grape-text': 'var(--raikou-color-grape-filled)',
      'color-grape-filled': 'var(--raikou-color-grape-6)',
      'color-grape-filled-hover': 'var(--raikou-color-grape-7)',
      'color-grape-light': 'rgba(190, 75, 219, 0.1)',
      'color-grape-light-hover': 'rgba(190, 75, 219, 0.12)',
      'color-grape-light-color': 'var(--raikou-color-grape-6)',
      'color-grape-outline': 'var(--raikou-color-grape-6)',
      'color-grape-outline-hover': 'rgba(190, 75, 219, 0.05)',
      'color-violet-text': 'var(--raikou-color-violet-filled)',
      'color-violet-filled': 'var(--raikou-color-violet-6)',
      'color-violet-filled-hover': 'var(--raikou-color-violet-7)',
      'color-violet-light': 'rgba(121, 80, 242, 0.1)',
      'color-violet-light-hover': 'rgba(121, 80, 242, 0.12)',
      'color-violet-light-color': 'var(--raikou-color-violet-6)',
      'color-violet-outline': 'var(--raikou-color-violet-6)',
      'color-violet-outline-hover': 'rgba(121, 80, 242, 0.05)',
      'color-indigo-text': 'var(--raikou-color-indigo-filled)',
      'color-indigo-filled': 'var(--raikou-color-indigo-6)',
      'color-indigo-filled-hover': 'var(--raikou-color-indigo-7)',
      'color-indigo-light': 'rgba(76, 110, 245, 0.1)',
      'color-indigo-light-hover': 'rgba(76, 110, 245, 0.12)',
      'color-indigo-light-color': 'var(--raikou-color-indigo-6)',
      'color-indigo-outline': 'var(--raikou-color-indigo-6)',
      'color-indigo-outline-hover': 'rgba(76, 110, 245, 0.05)',
      'color-blue-text': 'var(--raikou-color-blue-filled)',
      'color-blue-filled': 'var(--raikou-color-blue-6)',
      'color-blue-filled-hover': 'var(--raikou-color-blue-7)',
      'color-blue-light': 'rgba(34, 139, 230, 0.1)',
      'color-blue-light-hover': 'rgba(34, 139, 230, 0.12)',
      'color-blue-light-color': 'var(--raikou-color-blue-6)',
      'color-blue-outline': 'var(--raikou-color-blue-6)',
      'color-blue-outline-hover': 'rgba(34, 139, 230, 0.05)',
      'color-cyan-text': 'var(--raikou-color-cyan-filled)',
      'color-cyan-filled': 'var(--raikou-color-cyan-6)',
      'color-cyan-filled-hover': 'var(--raikou-color-cyan-7)',
      'color-cyan-light': 'rgba(21, 170, 191, 0.1)',
      'color-cyan-light-hover': 'rgba(21, 170, 191, 0.12)',
      'color-cyan-light-color': 'var(--raikou-color-cyan-6)',
      'color-cyan-outline': 'var(--raikou-color-cyan-6)',
      'color-cyan-outline-hover': 'rgba(21, 170, 191, 0.05)',
      'color-teal-text': 'var(--raikou-color-teal-filled)',
      'color-teal-filled': 'var(--raikou-color-teal-6)',
      'color-teal-filled-hover': 'var(--raikou-color-teal-7)',
      'color-teal-light': 'rgba(18, 184, 134, 0.1)',
      'color-teal-light-hover': 'rgba(18, 184, 134, 0.12)',
      'color-teal-light-color': 'var(--raikou-color-teal-6)',
      'color-teal-outline': 'var(--raikou-color-teal-6)',
      'color-teal-outline-hover': 'rgba(18, 184, 134, 0.05)',
      'color-green-text': 'var(--raikou-color-green-filled)',
      'color-green-filled': 'var(--raikou-color-green-6)',
      'color-green-filled-hover': 'var(--raikou-color-green-7)',
      'color-green-light': 'rgba(64, 192, 87, 0.1)',
      'color-green-light-hover': 'rgba(64, 192, 87, 0.12)',
      'color-green-light-color': 'var(--raikou-color-green-6)',
      'color-green-outline': 'var(--raikou-color-green-6)',
      'color-green-outline-hover': 'rgba(64, 192, 87, 0.05)',
      'color-lime-text': 'var(--raikou-color-lime-filled)',
      'color-lime-filled': 'var(--raikou-color-lime-6)',
      'color-lime-filled-hover': 'var(--raikou-color-lime-7)',
      'color-lime-light': 'rgba(130, 201, 30, 0.1)',
      'color-lime-light-hover': 'rgba(130, 201, 30, 0.12)',
      'color-lime-light-color': 'var(--raikou-color-lime-6)',
      'color-lime-outline': 'var(--raikou-color-lime-6)',
      'color-lime-outline-hover': 'rgba(130, 201, 30, 0.05)',
      'color-yellow-text': 'var(--raikou-color-yellow-filled)',
      'color-yellow-filled': 'var(--raikou-color-yellow-6)',
      'color-yellow-filled-hover': 'var(--raikou-color-yellow-7)',
      'color-yellow-light': 'rgba(250, 176, 5, 0.1)',
      'color-yellow-light-hover': 'rgba(250, 176, 5, 0.12)',
      'color-yellow-light-color': 'var(--raikou-color-yellow-6)',
      'color-yellow-outline': 'var(--raikou-color-yellow-6)',
      'color-yellow-outline-hover': 'rgba(250, 176, 5, 0.05)',
      'color-orange-text': 'var(--raikou-color-orange-filled)',
      'color-orange-filled': 'var(--raikou-color-orange-6)',
      'color-orange-filled-hover': 'var(--raikou-color-orange-7)',
      'color-orange-light': 'rgba(253, 126, 20, 0.1)',
      'color-orange-light-hover': 'rgba(253, 126, 20, 0.12)',
      'color-orange-light-color': 'var(--raikou-color-orange-6)',
      'color-orange-outline': 'var(--raikou-color-orange-6)',
      'color-orange-outline-hover': 'rgba(253, 126, 20, 0.05)',
    },
    dark: {
      'color-contrast': 'var(--raikou-color-white)',
      'color-bright': 'var(--raikou-color-white)',
      'color-text': 'var(--raikou-color-dark-0)',
      'color-body': 'var(--raikou-color-dark-7)',
      'color-error': 'var(--raikou-color-red-8)',
      'color-placeholder': 'var(--raikou-color-dark-3)',
      'color-anchor': 'var(--raikou-color-blue-4)',
      'color-default': 'var(--raikou-color-dark-6)',
      'color-default-hover': 'var(--raikou-color-dark-5)',
      'color-default-color': 'var(--raikou-color-white)',
      'color-default-border': 'var(--raikou-color-dark-4)',
      'color-dimmed': 'var(--raikou-color-dark-2)',
      'color-dark-text': 'var(--raikou-color-dark-4)',
      'color-dark-filled': 'var(--raikou-color-dark-8)',
      'color-dark-filled-hover': 'var(--raikou-color-dark-9)',
      'color-dark-light': 'rgba(46, 46, 46, 0.15)',
      'color-dark-light-hover': 'rgba(46, 46, 46, 0.2)',
      'color-dark-light-color': 'var(--raikou-color-dark-3)',
      'color-dark-outline': 'var(--raikou-color-dark-4)',
      'color-dark-outline-hover': 'rgba(66, 66, 66, 0.05)',
      'color-gray-text': 'var(--raikou-color-gray-4)',
      'color-gray-filled': 'var(--raikou-color-gray-8)',
      'color-gray-filled-hover': 'var(--raikou-color-gray-9)',
      'color-gray-light': 'rgba(134, 142, 150, 0.15)',
      'color-gray-light-hover': 'rgba(134, 142, 150, 0.2)',
      'color-gray-light-color': 'var(--raikou-color-gray-3)',
      'color-gray-outline': 'var(--raikou-color-gray-4)',
      'color-gray-outline-hover': 'rgba(206, 212, 218, 0.05)',
      'color-red-text': 'var(--raikou-color-red-4)',
      'color-red-filled': 'var(--raikou-color-red-8)',
      'color-red-filled-hover': 'var(--raikou-color-red-9)',
      'color-red-light': 'rgba(250, 82, 82, 0.15)',
      'color-red-light-hover': 'rgba(250, 82, 82, 0.2)',
      'color-red-light-color': 'var(--raikou-color-red-3)',
      'color-red-outline': 'var(--raikou-color-red-4)',
      'color-red-outline-hover': 'rgba(255, 135, 135, 0.05)',
      'color-pink-text': 'var(--raikou-color-pink-4)',
      'color-pink-filled': 'var(--raikou-color-pink-8)',
      'color-pink-filled-hover': 'var(--raikou-color-pink-9)',
      'color-pink-light': 'rgba(230, 73, 128, 0.15)',
      'color-pink-light-hover': 'rgba(230, 73, 128, 0.2)',
      'color-pink-light-color': 'var(--raikou-color-pink-3)',
      'color-pink-outline': 'var(--raikou-color-pink-4)',
      'color-pink-outline-hover': 'rgba(247, 131, 172, 0.05)',
      'color-grape-text': 'var(--raikou-color-grape-4)',
      'color-grape-filled': 'var(--raikou-color-grape-8)',
      'color-grape-filled-hover': 'var(--raikou-color-grape-9)',
      'color-grape-light': 'rgba(190, 75, 219, 0.15)',
      'color-grape-light-hover': 'rgba(190, 75, 219, 0.2)',
      'color-grape-light-color': 'var(--raikou-color-grape-3)',
      'color-grape-outline': 'var(--raikou-color-grape-4)',
      'color-grape-outline-hover': 'rgba(218, 119, 242, 0.05)',
      'color-violet-text': 'var(--raikou-color-violet-4)',
      'color-violet-filled': 'var(--raikou-color-violet-8)',
      'color-violet-filled-hover': 'var(--raikou-color-violet-9)',
      'color-violet-light': 'rgba(121, 80, 242, 0.15)',
      'color-violet-light-hover': 'rgba(121, 80, 242, 0.2)',
      'color-violet-light-color': 'var(--raikou-color-violet-3)',
      'color-violet-outline': 'var(--raikou-color-violet-4)',
      'color-violet-outline-hover': 'rgba(151, 117, 250, 0.05)',
      'color-indigo-text': 'var(--raikou-color-indigo-4)',
      'color-indigo-filled': 'var(--raikou-color-indigo-8)',
      'color-indigo-filled-hover': 'var(--raikou-color-indigo-9)',
      'color-indigo-light': 'rgba(76, 110, 245, 0.15)',
      'color-indigo-light-hover': 'rgba(76, 110, 245, 0.2)',
      'color-indigo-light-color': 'var(--raikou-color-indigo-3)',
      'color-indigo-outline': 'var(--raikou-color-indigo-4)',
      'color-indigo-outline-hover': 'rgba(116, 143, 252, 0.05)',
      'color-blue-text': 'var(--raikou-color-blue-4)',
      'color-blue-filled': 'var(--raikou-color-blue-8)',
      'color-blue-filled-hover': 'var(--raikou-color-blue-9)',
      'color-blue-light': 'rgba(34, 139, 230, 0.15)',
      'color-blue-light-hover': 'rgba(34, 139, 230, 0.2)',
      'color-blue-light-color': 'var(--raikou-color-blue-3)',
      'color-blue-outline': 'var(--raikou-color-blue-4)',
      'color-blue-outline-hover': 'rgba(77, 171, 247, 0.05)',
      'color-cyan-text': 'var(--raikou-color-cyan-4)',
      'color-cyan-filled': 'var(--raikou-color-cyan-8)',
      'color-cyan-filled-hover': 'var(--raikou-color-cyan-9)',
      'color-cyan-light': 'rgba(21, 170, 191, 0.15)',
      'color-cyan-light-hover': 'rgba(21, 170, 191, 0.2)',
      'color-cyan-light-color': 'var(--raikou-color-cyan-3)',
      'color-cyan-outline': 'var(--raikou-color-cyan-4)',
      'color-cyan-outline-hover': 'rgba(59, 201, 219, 0.05)',
      'color-teal-text': 'var(--raikou-color-teal-4)',
      'color-teal-filled': 'var(--raikou-color-teal-8)',
      'color-teal-filled-hover': 'var(--raikou-color-teal-9)',
      'color-teal-light': 'rgba(18, 184, 134, 0.15)',
      'color-teal-light-hover': 'rgba(18, 184, 134, 0.2)',
      'color-teal-light-color': 'var(--raikou-color-teal-3)',
      'color-teal-outline': 'var(--raikou-color-teal-4)',
      'color-teal-outline-hover': 'rgba(56, 217, 169, 0.05)',
      'color-green-text': 'var(--raikou-color-green-4)',
      'color-green-filled': 'var(--raikou-color-green-8)',
      'color-green-filled-hover': 'var(--raikou-color-green-9)',
      'color-green-light': 'rgba(64, 192, 87, 0.15)',
      'color-green-light-hover': 'rgba(64, 192, 87, 0.2)',
      'color-green-light-color': 'var(--raikou-color-green-3)',
      'color-green-outline': 'var(--raikou-color-green-4)',
      'color-green-outline-hover': 'rgba(105, 219, 124, 0.05)',
      'color-lime-text': 'var(--raikou-color-lime-4)',
      'color-lime-filled': 'var(--raikou-color-lime-8)',
      'color-lime-filled-hover': 'var(--raikou-color-lime-9)',
      'color-lime-light': 'rgba(130, 201, 30, 0.15)',
      'color-lime-light-hover': 'rgba(130, 201, 30, 0.2)',
      'color-lime-light-color': 'var(--raikou-color-lime-3)',
      'color-lime-outline': 'var(--raikou-color-lime-4)',
      'color-lime-outline-hover': 'rgba(169, 227, 75, 0.05)',
      'color-yellow-text': 'var(--raikou-color-yellow-4)',
      'color-yellow-filled': 'var(--raikou-color-yellow-8)',
      'color-yellow-filled-hover': 'var(--raikou-color-yellow-9)',
      'color-yellow-light': 'rgba(250, 176, 5, 0.15)',
      'color-yellow-light-hover': 'rgba(250, 176, 5, 0.2)',
      'color-yellow-light-color': 'var(--raikou-color-yellow-3)',
      'color-yellow-outline': 'var(--raikou-color-yellow-4)',
      'color-yellow-outline-hover': 'rgba(255, 212, 59, 0.05)',
      'color-orange-text': 'var(--raikou-color-orange-4)',
      'color-orange-filled': 'var(--raikou-color-orange-8)',
      'color-orange-filled-hover': 'var(--raikou-color-orange-9)',
      'color-orange-light': 'rgba(253, 126, 20, 0.15)',
      'color-orange-light-hover': 'rgba(253, 126, 20, 0.2)',
      'color-orange-light-color': 'var(--raikou-color-orange-3)',
      'color-orange-outline': 'var(--raikou-color-orange-4)',
      'color-orange-outline-hover': 'rgba(255, 169, 77, 0.05)',
    },
  },
};

const theme = extendTheme({
  cssVarPrefix: 'raikou',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-raikou-color-scheme='${colorScheme}']` : ':root',
  ...cssTheme,
});

export default defineConfig({
  plugins: [
    pigment({
      atomic: false,
      theme,
      rawTheme,
    }),
    react(),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
