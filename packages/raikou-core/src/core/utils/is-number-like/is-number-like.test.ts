import { isNumberLike } from './is-number-like';

describe('@raikou/core/isNumberLike', () => {
  it('returns true for numbers', () => {
    expect(isNumberLike(1)).toBe(true);
    expect(isNumberLike(0)).toBe(true);
    expect(isNumberLike(-1)).toBe(true);
    expect(isNumberLike(1.1)).toBe(true);
    expect(isNumberLike(-1.1)).toBe(true);
    expect(isNumberLike(0.1)).toBe(true);
    expect(isNumberLike(-0.1)).toBe(true);
    expect(isNumberLike(Infinity)).toBe(true);
    expect(isNumberLike(-Infinity)).toBe(true);
  });

  it('returns true for strings that start with number', () => {
    expect(isNumberLike('1')).toBe(true);
    expect(isNumberLike('0')).toBe(true);
    expect(isNumberLike('-1')).toBe(true);
    expect(isNumberLike('1.1')).toBe(true);
    expect(isNumberLike('-1.1')).toBe(true);
    expect(isNumberLike('0.1')).toBe(true);
    expect(isNumberLike('-0.1')).toBe(true);
    expect(isNumberLike('calc(10rem - 5px)')).toBe(true);
    expect(isNumberLike('var(--test-var)')).toBe(true);
  });

  it('returns false for strings that do not start with number', () => {
    expect(isNumberLike('')).toBe(false);
    expect(isNumberLike(' ')).toBe(false);
    expect(isNumberLike('a')).toBe(false);
    expect(isNumberLike('a1')).toBe(false);
  });
});
