import { fontFamilyResolver } from './font-family-resolver';

describe('@raikou/core/Box/font-family-resolver', () => {
  it('resolves theme font family', () => {
    expect(fontFamilyResolver('text')).toBe('var(--raikou-font-family)');
    expect(fontFamilyResolver('mono')).toBe('var(--raikou-font-family-monospace)');
    expect(fontFamilyResolver('heading')).toBe('var(--raikou-font-family-headings)');
  });

  it('resolves non theme font family', () => {
    expect(fontFamilyResolver('Arial')).toBe('Arial');
  });
});
