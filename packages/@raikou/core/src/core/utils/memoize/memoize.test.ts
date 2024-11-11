import { vi } from 'vitest';
import { memoize } from './memoize';

describe('@raikou/core/utils/memoize', () => {
  it('memoizes function calls', () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const memoized = memoize(fn);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('memoizes function calls with object arguments', () => {
    const fn = vi.fn((a: { a: number; b: number }) => a.a + a.b);
    const memoized = memoize(fn);

    const input = { a: 1, b: 2 };

    expect(memoized(input)).toBe(3);
    expect(memoized(input)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
