import { testTransform } from './utils';

const baseInput = `
.actionIconGroup-root[data-orientation='horizontal'] {
  flex-direction: row;
}
.badge-root--dot {
  --badge-dot-size: calc(var(--badge-height) / 3.4);
  background-color: var(--_badge-bg);
  border: calc(0.0625rem * var(--raikou-scale)) solid var(--_badge-border-color);
  color: var(--_badge-color);
}
.breadcrumbs-root {
  display: flex;
  align-items: center;
}
[data-raikou-color-scheme="light"] .breadcrumbs-separator {
  --_separator-color: var(--raikou-color-gray-7);
}
[data-raikou-color-scheme="light"] .kbd-root {
  --_kbd-border-color: var(--raikou-color-gray-3);
  --_kbd-color: var(--raikou-color-gray-7);
  --_kbd-bg: var(--raikou-color-gray-0);
}
.button-root[data-block] {
  --_button-display: block;
  --_button-width: 100%;
}
.colorswatch-colorOverlay {
  position: absolute;
  inset: 0;
  border-radius: var(--cs-radius);
}
`;

const baseOutput = `
.badge-root--dot {
  --badge-dot-size: calc(var(--badge-height) / 3.4);
  background-color: var(--_badge-bg);
  border: calc(0.0625rem * var(--raikou-scale)) solid var(--_badge-border-color);
  color: var(--_badge-color);
}
.colorswatch-colorOverlay {
  position: absolute;
  inset: 0;
  border-radius: var(--cs-radius);
}
`;

describe('replace-css', () => {
  it('transforms replace css correctly', async () => {
    const res = await testTransform(baseInput);
    expect(res.css).toEqual(baseOutput);
  });
});
