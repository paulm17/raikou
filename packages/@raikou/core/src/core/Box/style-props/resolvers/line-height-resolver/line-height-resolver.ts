import { RaikouTheme } from '../../../../RaikouProvider';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export function lineHeightResolver(value: unknown, theme: RaikouTheme) {
  if (typeof value === 'string' && value in theme.lineHeights) {
    return `var(--raikou-line-height-${value})`;
  }

  if (typeof value === 'string' && headings.includes(value)) {
    return `var(--raikou-${value}-line-height)`;
  }

  return value;
}
