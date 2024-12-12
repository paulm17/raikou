export function randomId(prefix = 'raikou-'): string {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
}
