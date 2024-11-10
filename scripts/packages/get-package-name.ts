const DOCS_PACKAGES = ['demos', 'styles-api'];
const TESTS_PACKAGES = ['tests-core', 'tests-dates'];

export function getPackageName(input: string) {
  if (input.startsWith('@')) {
    return input;
  }

  if (DOCS_PACKAGES.includes(input)) {
    return `@docs/${input}`;
  }

  if (TESTS_PACKAGES.includes(input)) {
    return `@raikou-tests/${input.replace('tests-', '')}`;
  }

  return `@raikou/${input}`;
}
