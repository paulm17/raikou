import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useDidUpdate } from './use-did-update';

describe('@raikou/hooks/use-did-update', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  it('calls `fn` on `dependencies` change', () => {
    const fn = vi.fn();
    let dependency = '';
    const { rerender } = renderHook(() => useDidUpdate(fn, [dependency]));
    expect(fn).not.toHaveBeenCalled();
    //Change dependency and rerender
    dependency = 'foo';
    rerender();
    expect(fn).toHaveBeenCalled();
  });
});
