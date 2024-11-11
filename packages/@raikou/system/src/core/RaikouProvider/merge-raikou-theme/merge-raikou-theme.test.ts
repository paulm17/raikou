import { DEFAULT_THEME } from '@raikou/system';
import {
  INVALID_PRIMARY_COLOR_ERROR,
  INVALID_PRIMARY_SHADE_ERROR,
  mergeRaikouTheme,
} from './merge-raikou-theme';

describe('@raikou/core/merge-raikou-theme', () => {
  it('throws error when theme.primaryColor is invalid', () => {
    expect(() => mergeRaikouTheme({ ...DEFAULT_THEME, primaryColor: 'unknown' })).toThrow(
      INVALID_PRIMARY_COLOR_ERROR
    );

    expect(() => mergeRaikouTheme(DEFAULT_THEME, { primaryColor: 'unknown' })).toThrow(
      INVALID_PRIMARY_COLOR_ERROR
    );
  });

  it('throws error when theme.primaryShade is invalid', () => {
    expect(() => mergeRaikouTheme({ ...DEFAULT_THEME, primaryShade: 10 as any })).toThrow(
      INVALID_PRIMARY_SHADE_ERROR
    );

    expect(() =>
      mergeRaikouTheme({
        ...DEFAULT_THEME,
        primaryShade: { light: 0, dark: 10 as any },
      })
    ).toThrow(INVALID_PRIMARY_SHADE_ERROR);

    expect(() =>
      mergeRaikouTheme({
        ...DEFAULT_THEME,
        primaryShade: { light: 10 as any, dark: 0 },
      })
    ).toThrow(INVALID_PRIMARY_SHADE_ERROR);

    expect(() => mergeRaikouTheme(DEFAULT_THEME, { primaryShade: 10 as any })).toThrow(
      INVALID_PRIMARY_SHADE_ERROR
    );

    expect(() =>
      mergeRaikouTheme(DEFAULT_THEME, {
        primaryShade: { light: 0, dark: 10 as any },
      })
    ).toThrow(INVALID_PRIMARY_SHADE_ERROR);

    expect(() =>
      mergeRaikouTheme(DEFAULT_THEME, {
        primaryShade: { light: 10 as any, dark: 0 },
      })
    ).toThrow(INVALID_PRIMARY_SHADE_ERROR);
  });

  it('merges theme and override correctly', () => {
    expect(
      mergeRaikouTheme(DEFAULT_THEME, {
        primaryShade: 9,
        radius: {
          md: 'test-radius',
        },
        headings: {
          fontFamily: 'test-font-family',
          sizes: {
            h1: { fontSize: 'test-font-size' },
          },
        },
      })
    ).toStrictEqual({
      ...DEFAULT_THEME,
      primaryShade: 9,
      radius: {
        ...DEFAULT_THEME.radius,
        md: 'test-radius',
      },
      headings: {
        ...DEFAULT_THEME.headings,
        fontFamily: 'test-font-family',
        sizes: {
          ...DEFAULT_THEME.headings.sizes,
          h1: {
            ...DEFAULT_THEME.headings.sizes.h1,
            fontSize: 'test-font-size',
          },
        },
      },
    });
  });

  it('assigns fontFamily to headings.fontFamily if it is not defined', () => {
    expect(
      mergeRaikouTheme(DEFAULT_THEME, {
        fontFamily: 'test-font-family',
      })
    ).toStrictEqual({
      ...DEFAULT_THEME,
      fontFamily: 'test-font-family',
      headings: {
        ...DEFAULT_THEME.headings,
        fontFamily: 'test-font-family',
      },
    });
  });

  it('merges theme and override correctly when override is undefined', () => {
    expect(mergeRaikouTheme(DEFAULT_THEME, undefined)).toBe(DEFAULT_THEME);
  });
});
