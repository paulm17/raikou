// Files names that should not have use client directive at the top of the output file
export const ROLLUP_EXCLUDE_USE_CLIENT = [
  'index',
  'core/utils/deep-merge/deep-merge',
  'core/utils/units-converters/rem',
  'core/utils/units-converters/px',
  'core/factory/create-polymorphic-component',
  'core/RaikouProvider/create-theme/create-theme',
  'core/RaikouProvider/color-functions/darken/darken',
  'core/RaikouProvider/color-functions/lighten/lighten',
  'core/RaikouProvider/color-functions/rgba/rgba',
  'core/RaikouProvider/color-functions/to-rgba/to-rgba',
  'core/RaikouProvider/default-colors',
  'core/RaikouProvider/default-theme',
  'core/RaikouProvider/merge-raikou-theme/merge-raikou-theme',
  'core/RaikouProvider/RaikouCssVariables/virtual-color/virtual-color',
  'system/RaikouProvider/raikou-html-props',
  'theme-to-vars',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
