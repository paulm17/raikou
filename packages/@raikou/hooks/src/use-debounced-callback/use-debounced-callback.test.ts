import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useDebouncedCallback } from './use-debounced-callback';

describe('@raikou/hooks/use-debounced-callback', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('debounces callback with given delay', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current();
    result.current();
    result.current();
    expect(callback).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalled();
  });

  it('calls callback with correct arguments', () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 100));
    result.current(1);
    result.current(2);
    result.current(3);
    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledWith(3);
  });
});
