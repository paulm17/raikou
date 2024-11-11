import { DEFAULT_THEME } from '@raikou/system';
import { isVirtualColor, virtualColor } from './virtual-color';

describe('@raikou/core/virtual-color', () => {
  it('creates virtual color object', () => {
    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toStrictEqual([
      'var(--raikou-color-test-0)',
      'var(--raikou-color-test-1)',
      'var(--raikou-color-test-2)',
      'var(--raikou-color-test-3)',
      'var(--raikou-color-test-4)',
      'var(--raikou-color-test-5)',
      'var(--raikou-color-test-6)',
      'var(--raikou-color-test-7)',
      'var(--raikou-color-test-8)',
      'var(--raikou-color-test-9)',
    ]);

    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toHaveProperty(
      'dark',
      'dark'
    );
    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toHaveProperty(
      'light',
      'light'
    );
  });

  it('correctly detects virtual color object', () => {
    expect(isVirtualColor(virtualColor({ name: 'test', dark: 'dark', light: 'light' }))).toBe(true);
    expect(isVirtualColor(DEFAULT_THEME.colors.blue)).toBe(false);
  });
});
