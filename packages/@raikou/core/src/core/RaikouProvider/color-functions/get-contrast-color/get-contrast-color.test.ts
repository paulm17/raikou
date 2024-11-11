import { DEFAULT_THEME } from '@raikou/system';
import { getContrastColor } from './get-contrast-color';

describe('@raikou/core/get-contrast-color', () => {
  it('returns correct contrast color', () => {
    expect(getContrastColor({ color: 'blue', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--raikou-color-white)'
    );
    expect(getContrastColor({ color: 'red', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--raikou-color-white)'
    );
    expect(getContrastColor({ color: 'yellow.4', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--raikou-color-black)'
    );
    expect(getContrastColor({ color: 'blue.1', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--raikou-color-black)'
    );
    expect(getContrastColor({ color: 'lime.5', theme: DEFAULT_THEME, autoContrast: true })).toBe(
      'var(--raikou-color-black)'
    );
  });

  it('always returns white when autoContrast is false', () => {
    expect(getContrastColor({ color: 'blue', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--raikou-color-white)'
    );
    expect(getContrastColor({ color: 'red', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--raikou-color-white)'
    );
    expect(getContrastColor({ color: 'yellow.4', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--raikou-color-white)'
    );
    expect(getContrastColor({ color: 'blue.1', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--raikou-color-white)'
    );
    expect(getContrastColor({ color: 'lime.5', theme: DEFAULT_THEME, autoContrast: false })).toBe(
      'var(--raikou-color-white)'
    );
  });
});
