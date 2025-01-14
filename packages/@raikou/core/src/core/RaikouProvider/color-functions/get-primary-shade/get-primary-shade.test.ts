import { DEFAULT_THEME } from '@raikou/system';
import { getPrimaryShade } from './get-primary-shade';

describe('@raikou/core/get-primary-shade', () => {
  it('returns correct primary shade', () => {
    expect(getPrimaryShade(DEFAULT_THEME, 'dark')).toBe((DEFAULT_THEME.primaryShade as any).dark);
    expect(getPrimaryShade(DEFAULT_THEME, 'light')).toBe((DEFAULT_THEME.primaryShade as any).light);
    expect(getPrimaryShade(DEFAULT_THEME, 'auto')).toBe((DEFAULT_THEME.primaryShade as any).light);
  });
});
