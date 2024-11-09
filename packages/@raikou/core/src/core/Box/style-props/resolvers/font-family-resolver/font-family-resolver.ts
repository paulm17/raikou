const values = {
  text: 'var(--raikou-font-family)',
  mono: 'var(--raikou-font-family-monospace)',
  monospace: 'var(--raikou-font-family-monospace)',
  heading: 'var(--raikou-font-family-headings)',
  headings: 'var(--raikou-font-family-headings)',
};

export function fontFamilyResolver(fontFamily: unknown) {
  if (typeof fontFamily === 'string' && fontFamily in values) {
    return values[fontFamily as keyof typeof values];
  }

  return fontFamily;
}
